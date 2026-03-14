/**
 * Generate HIGH-QUALITY Vietnamese (.vi.md) translations using Gemini Pro.
 * 
 * ✅ FULLY AUTONOMOUS — chạy rồi đi ngủ được!
 * - Tự retry khi bị rate limit
 * - Tự chờ khi quota hết, thử lại mỗi 5 phút
 * - Skip agents đã dịch xong (resume-safe)
 * - Log progress vào file để kiểm tra sau
 * 
 * Usage: node scripts/generate-vi-gemini.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AGENTS_DIR = path.join(__dirname, '..', 'content', 'agents');
const LOG_FILE = path.join(__dirname, '..', 'translation-log.txt');

// ============================================
// Configuration
// ============================================
const GEMINI_API_KEY = 'AIzaSyCxVOI3gMrAl7VXDD_B3dVTpMMqjS75Jkg';
const MODEL_NAME = 'gemini-2.0-flash';
const DELAY_BETWEEN_REQUESTS_MS = 10000; // 10s gap = max 6 req/min (safe margin)
const QUOTA_WAIT_MS = 2 * 60 * 1000;     // 2 min wait when quota hit (waiting for daily reset)
const MAX_QUOTA_RETRIES = 200;          // Keep trying for ~16 hours

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

// ============================================
// Translation prompt — curated for AI agent context
// ============================================
const SYSTEM_PROMPT = `Bạn là một dịch giả chuyên nghiệp Anh-Việt, chuyên dịch tài liệu kỹ thuật về AI và Marketing.

NHIỆM VỤ: Dịch nội dung prompt của AI Agent từ tiếng Anh sang tiếng Việt.

QUY TẮC BẮT BUỘC:
1. GIỮ NGUYÊN format Markdown (headers ##, ###, bullet points -, **, backticks, etc.)
2. GIỮ NGUYÊN các thuật ngữ kỹ thuật phổ biến bằng tiếng Anh: API, DevOps, CI/CD, pipeline, sprint, microservices, frontend, backend, framework, database, cache, webhook, token, endpoint, SDK, deploy, container, Docker, Kubernetes, Git, pull request, merge, branch, commit, debug, refactor, stack, middleware, proxy, DNS, SSL, OAuth, JWT, REST, GraphQL, CRUD, SQL, NoSQL, ETL, SaaS, B2B, B2C, CRM, KPI, ROI, ROAS, CPA, CPM, CPC, CTR, SEO, SEM, PPC, A/B testing, MVP, UX, UI, CTA, lead, funnel, conversion, retargeting, remarketing, organic traffic, brand awareness, engagement rate, bounce rate, impression, click-through, MEDDPICC, Performance Max, Google Ads, Facebook Ads, TikTok Ads, LinkedIn Ads
3. Dịch TỰ NHIÊN, đọc như người Việt viết — KHÔNG dịch máy móc từng từ
4. Giữ nguyên tên riêng, tên tool, tên nền tảng (Google, Meta, TikTok, Shopee, Taobao...)
5. Dịch các heading/section titles sang tiếng Việt nhưng giữ emoji nếu có
6. KHÔNG thêm, bớt hay giải thích gì thêm — chỉ dịch nội dung gốc
7. KHÔNG dịch frontmatter (phần ---name:... ---)
8. Với các đoạn mô tả vai trò, dịch ở ngôi thứ hai "Bạn là..." nếu bản gốc dùng "You are..."

CHỈ TRẢ VỀ BẢN DỊCH TIẾNG VIỆT, KHÔNG CẦN GIẢI THÍCH GÌ THÊM.`;

// ============================================
// Helpers
// ============================================

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { data: {}, body: content };
  const data = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.substring(0, colonIdx).trim();
      let value = line.substring(colonIdx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  }
  const body = content.substring(match[0].length).trim();
  return { data, body };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function log(msg) {
  const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  const line = `[${timestamp}] ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function isAlreadyTranslated(viPath) {
  if (!fs.existsSync(viPath)) return false;
  const content = fs.readFileSync(viPath, 'utf-8');
  // Only skip if file was translated by Gemini (has our marker)
  return content.includes('<!-- gemini-translated -->');
}

// ============================================
// Gemini translation with robust retry
// ============================================

async function translateWithGemini(body, agentName) {
  const prompt = `Hãy dịch prompt sau của AI Agent "${agentName}" sang tiếng Việt:\n\n${body}`;
  
  for (let quotaRetry = 0; quotaRetry < MAX_QUOTA_RETRIES; quotaRetry++) {
    try {
      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: SYSTEM_PROMPT + '\n\n' + prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 8192,
        },
      });
      
      let text = result.response.text();
      // Remove markdown code block wrapping if Gemini adds it
      text = text.replace(/^```markdown\n?/i, '').replace(/\n?```$/i, '');
      text = text.replace(/^```\n?/, '').replace(/\n?```$/, '');
      return text.trim();
      
    } catch (err) {
      const isQuotaError = err.message?.includes('429') || 
                           err.message?.includes('RESOURCE_EXHAUSTED') ||
                           err.message?.includes('quota');
      
      if (isQuotaError) {
        // Parse retry delay from error message if available
        const retryMatch = err.message?.match(/retry in ([\d.]+)s/i);
        let waitTime;
        
        if (retryMatch) {
          waitTime = Math.ceil(parseFloat(retryMatch[1]) * 1000) + 2000; // + 2s buffer
        } else {
          waitTime = QUOTA_WAIT_MS;
        }
        
        const waitMin = Math.ceil(waitTime / 60000);
        log(`⏳ Quota hết — chờ ${waitTime > 60000 ? waitMin + ' phút' : Math.ceil(waitTime/1000) + 's'} rồi thử lại... (retry ${quotaRetry + 1}/${MAX_QUOTA_RETRIES})`);
        await sleep(waitTime);
        continue;
      }
      
      // Non-quota error — throw
      throw err;
    }
  }
  
  throw new Error('Exceeded max quota retries');
}

// ============================================
// Recursive file finder
// ============================================

function findMdFilesRecursive(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdFilesRecursive(fullPath));
    } else if (entry.name.endsWith('.md') && !entry.name.endsWith('.vi.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

// ============================================
// Main
// ============================================

async function main() {
  // Gather all agent files recursively
  const allFiles = findMdFilesRecursive(AGENTS_DIR).sort();
  const allAgents = allFiles.map(filePath => ({
    relativePath: path.relative(AGENTS_DIR, filePath),
    file: path.basename(filePath),
    path: filePath,
  }));
  
  // Count already done
  let alreadyDone = 0;
  for (const agent of allAgents) {
    const viPath = agent.path.replace('.md', '.vi.md');
    if (isAlreadyTranslated(viPath)) alreadyDone++;
  }
  const remaining = allAgents.length - alreadyDone;
  
  log(`🤖 Dịch ${allAgents.length} agents bằng Gemini Pro (${alreadyDone} đã xong, còn ${remaining})`);
  log(`⏱️  Script sẽ TỰ ĐỘNG retry nếu quota hết — yên tâm đi ngủ!`);
  log('');
  
  let created = 0;
  let skipped = 0;
  let errors = 0;
  let currentDiv = '';
  
  for (let i = 0; i < allAgents.length; i++) {
    const agent = allAgents[i];
    
    // Division header based on relative path
    const divName = path.dirname(agent.relativePath);
    if (divName !== currentDiv) {
      if (currentDiv) log(`   ✅ Xong ${currentDiv}`);
      currentDiv = divName;
      const divTotal = allAgents.filter(a => path.dirname(a.relativePath) === currentDiv).length;
      log(`\n📁 ${currentDiv} (${divTotal} agents)`);
    }
    
    const content = fs.readFileSync(agent.path, 'utf-8');
    const { data, body } = parseFrontmatter(content);
    const name = data.name || path.basename(agent.file, '.md');
    const viPath = agent.path.replace('.md', '.vi.md');
    
    // Skip if already has Gemini-quality translation
    if (isAlreadyTranslated(viPath)) {
      skipped++;
      log(`   [${i+1}/${allAgents.length}] ${name} ⏭️ (đã dịch rồi)`);
      continue;
    }
    
    try {
      log(`   [${i+1}/${allAgents.length}] ${name}... đang dịch`);
      const translatedBody = await translateWithGemini(body, name);
      
      let viContent = `---\nname: ${name}\n---\n\n<!-- gemini-translated -->\n\n`;
      viContent += translatedBody;
      viContent += '\n\n---\n\n';
      viContent += '> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.\n';
      
      fs.writeFileSync(viPath, viContent, 'utf-8');
      created++;
      log(`   [${i+1}/${allAgents.length}] ${name} ✅`);
    } catch (err) {
      errors++;
      log(`   [${i+1}/${allAgents.length}] ${name} ❌ ${err.message}`);
    }
    
    // Rate limiting delay between requests
    if (i < allAgents.length - 1) {
      await sleep(DELAY_BETWEEN_REQUESTS_MS);
    }
  }
  
  if (currentDiv) log(`   ✅ Xong ${currentDiv}`);
  
  log('');
  log('═══════════════════════════════════════');
  log(`📊 KẾT QUẢ CUỐI CÙNG:`);
  log(`   Tổng agents:   ${allAgents.length}`);
  log(`   Đã dịch mới:   ${created}`);
  log(`   Đã có sẵn:     ${skipped}`);
  log(`   Lỗi:           ${errors}`);
  log('═══════════════════════════════════════');
  log('🎉 HOÀN THÀNH!');
}

main().catch(err => {
  log(`💥 Fatal error: ${err.message}`);
  process.exit(1);
});
