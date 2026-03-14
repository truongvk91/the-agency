/**
 * Generate FULL Vietnamese (.vi.md) translation files for all agents.
 * Uses Google Translate API to translate the ENTIRE prompt content.
 * 
 * Usage: node scripts/generate-vi-full.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import translate from 'google-translate-api-x';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AGENTS_DIR = path.join(__dirname, '..', 'content', 'agents');

// ============================================
// Translation helpers
// ============================================

/**
 * Translate text from English to Vietnamese.
 * Splits large texts into chunks to avoid API limits.
 */
async function translateToVietnamese(text) {
  if (!text || text.trim().length === 0) return text;
  
  // Split into chunks of ~4000 chars to avoid API limits
  const chunks = splitIntoChunks(text, 4000);
  const translated = [];
  
  for (const chunk of chunks) {
    try {
      const result = await translate(chunk, { from: 'en', to: 'vi' });
      translated.push(result.text);
    } catch (err) {
      console.error(`    ⚠️ Translation error, keeping original: ${err.message}`);
      translated.push(chunk);
    }
    // Small delay to avoid rate limiting
    await sleep(300);
  }
  
  return translated.join('\n');
}

function splitIntoChunks(text, maxLen) {
  const lines = text.split('\n');
  const chunks = [];
  let current = '';
  
  for (const line of lines) {
    if ((current + '\n' + line).length > maxLen && current.length > 0) {
      chunks.push(current);
      current = line;
    } else {
      current = current ? current + '\n' + line : line;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// Frontmatter parser
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

// ============================================
// Main translation logic
// ============================================

async function translateAgentFile(filePath, division) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, body } = parseFrontmatter(content);
  
  const name = data.name || 'Agent';
  
  // Translate the full body content
  const translatedBody = await translateToVietnamese(body);
  
  // Build the .vi.md file with translated content
  let vi = `---\nname: ${name}\n---\n\n`;
  vi += translatedBody;
  vi += '\n\n---\n\n';
  vi += '> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.\n';
  
  return vi;
}

async function main() {
  const divisions = fs.readdirSync(AGENTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();
  
  let total = 0;
  let created = 0;
  let errors = 0;
  
  console.log('🌐 Bắt đầu dịch toàn bộ prompt sang tiếng Việt...\n');
  
  for (const division of divisions) {
    const divPath = path.join(AGENTS_DIR, division);
    const files = fs.readdirSync(divPath)
      .filter(f => f.endsWith('.md') && !f.endsWith('.vi.md'))
      .sort();
    
    console.log(`📁 ${division} (${files.length} agents)`);
    
    for (const file of files) {
      total++;
      const viFile = file.replace('.md', '.vi.md');
      const viPath = path.join(divPath, viFile);
      const filePath = path.join(divPath, file);
      
      try {
        process.stdout.write(`   ✏️  Đang dịch: ${data_name(filePath)}...`);
        const viContent = await translateAgentFile(filePath, division);
        fs.writeFileSync(viPath, viContent, 'utf-8');
        created++;
        console.log(` ✅`);
      } catch (err) {
        errors++;
        console.log(` ❌ ${err.message}`);
      }
    }
    
    console.log(`   ✅ Xong ${division}\n`);
  }
  
  console.log(`\n📊 Kết quả:`);
  console.log(`   Tổng agents: ${total}`);
  console.log(`   Đã dịch: ${created}`);
  console.log(`   Lỗi: ${errors}`);
}

function data_name(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data } = parseFrontmatter(content);
  return data.name || path.basename(filePath, '.md');
}

main().catch(console.error);
