/**
 * Generate Vietnamese (.vi.md) translations for remaining agent files
 * that don't yet have a .vi.md counterpart.
 * Recursively scans all subdirectories under content/agents/.
 * 
 * Usage: node scripts/generate-vi-remaining.mjs
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

async function translateToVietnamese(text) {
  if (!text || text.trim().length === 0) return text;
  
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
  if (!match) return { data: {}, body: content, hasFrontmatter: false };
  
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
  return { data, body, hasFrontmatter: true };
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
      // Check if .vi.md counterpart exists
      const viPath = fullPath.replace('.md', '.vi.md');
      if (!fs.existsSync(viPath)) {
        results.push(fullPath);
      }
    }
  }
  
  return results;
}

// ============================================
// Main translation logic
// ============================================

async function translateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, body, hasFrontmatter } = parseFrontmatter(content);
  
  const translatedBody = await translateToVietnamese(body);
  
  let vi = '';
  if (hasFrontmatter) {
    const name = data.name || 'Agent';
    vi += `---\nname: ${name}\n---\n\n`;
  }
  vi += translatedBody;
  vi += '\n\n---\n\n';
  vi += '> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.\n';
  
  return vi;
}

async function main() {
  const missingFiles = findMdFilesRecursive(AGENTS_DIR).sort();
  
  console.log(`🌐 Tìm thấy ${missingFiles.length} file chưa có bản dịch tiếng Việt.\n`);
  
  if (missingFiles.length === 0) {
    console.log('✅ Tất cả file đã được dịch!');
    return;
  }
  
  let created = 0;
  let errors = 0;
  
  for (const filePath of missingFiles) {
    const relativePath = path.relative(AGENTS_DIR, filePath);
    const viPath = filePath.replace('.md', '.vi.md');
    
    try {
      process.stdout.write(`  ✏️  Đang dịch: ${relativePath}...`);
      const viContent = await translateFile(filePath);
      fs.writeFileSync(viPath, viContent, 'utf-8');
      created++;
      console.log(` ✅`);
    } catch (err) {
      errors++;
      console.log(` ❌ ${err.message}`);
    }
  }
  
  console.log(`\n📊 Kết quả:`);
  console.log(`   Tổng file cần dịch: ${missingFiles.length}`);
  console.log(`   Đã dịch: ${created}`);
  console.log(`   Lỗi: ${errors}`);
}

main().catch(console.error);
