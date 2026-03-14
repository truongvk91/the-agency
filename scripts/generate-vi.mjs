/**
 * Generate Vietnamese (.vi.md) translation files for all agents.
 * 
 * This script reads each agent's original .md file, extracts key information,
 * and generates a structured Vietnamese guide that helps users understand
 * the agent's role, capabilities, and how to use it effectively.
 * 
 * Usage: node scripts/generate-vi.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AGENTS_DIR = path.join(__dirname, '..', 'content', 'agents');

// ============================================
// Vietnamese translation mappings
// ============================================

const divisionNames = {
  'marketing': 'Marketing',
  'paid-media': 'Quảng cáo trả phí',
  'design': 'Thiết kế',
  'engineering': 'Kỹ thuật',
  'game-development': 'Phát triển Game',
  'integrations': 'Tích hợp hệ thống',
  'product': 'Sản phẩm',
  'project-management': 'Quản lý dự án',
  'sales': 'Kinh doanh',
  'spatial-computing': 'Spatial Computing',
  'specialized': 'Chuyên môn đặc biệt',
  'strategy': 'Chiến lược',
  'support': 'Hỗ trợ khách hàng',
  'testing': 'Kiểm thử',
};

// Common section header translations
const sectionTranslations = {
  'role definition': 'Định nghĩa vai trò',
  'core capabilities': 'Năng lực cốt lõi',
  'specialized skills': 'Kỹ năng chuyên sâu',
  'decision framework': 'Khi nào nên sử dụng',
  'success metrics': 'Chỉ số thành công',
  'your identity': 'Danh tính & Vai trò',
  'identity & memory': 'Danh tính & Vai trò',
  'your core mission': 'Nhiệm vụ cốt lõi',
  'core mission': 'Nhiệm vụ cốt lõi',
  'critical rules': 'Quy tắc quan trọng',
  'communication style': 'Phong cách giao tiếp',
  'response format': 'Định dạng phản hồi',
  'key rules': 'Quy tắc chính',
  'personality': 'Tính cách',
  'tools': 'Công cụ sử dụng',
  'workflow': 'Quy trình làm việc',
  'output format': 'Định dạng đầu ra',
  'constraints': 'Giới hạn & Ràng buộc',
};

// ============================================
// Content extraction helpers
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
      // Remove quotes
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

function extractSections(body) {
  const sections = [];
  const lines = body.split('\n');
  let currentSection = null;
  let currentContent = [];
  
  for (const line of lines) {
    const h2Match = line.match(/^##\s+(?:[\p{Emoji}\u200d\ufe0f]+\s*)?(.+)/u);
    if (h2Match) {
      if (currentSection) {
        sections.push({ title: currentSection, content: currentContent.join('\n').trim() });
      }
      currentSection = h2Match[1].trim();
      currentContent = [];
    } else if (currentSection) {
      currentContent.push(line);
    }
  }
  
  if (currentSection) {
    sections.push({ title: currentSection, content: currentContent.join('\n').trim() });
  }
  
  return sections;
}

function extractBulletPoints(content, maxItems = 8) {
  const bullets = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    const bulletMatch = line.match(/^[\s]*[-*]\s+\*?\*?(.+)/);
    if (bulletMatch) {
      let text = bulletMatch[1].trim();
      // Clean up markdown formatting
      text = text.replace(/\*\*/g, '').replace(/\*\s*$/, '').trim();
      if (text.length > 5 && bullets.length < maxItems) {
        bullets.push(text);
      }
    }
  }
  
  return bullets;
}

function translateSectionTitle(title) {
  const lower = title.toLowerCase().replace(/[^\w\s]/g, '').trim();
  
  for (const [eng, vi] of Object.entries(sectionTranslations)) {
    if (lower.includes(eng)) return vi;
  }
  
  return title;
}

// ============================================
// Vietnamese content generator
// ============================================

function generateVietnamese(data, body, division) {
  const name = data.name || 'Agent';
  const description = data.description || '';
  const emoji = data.emoji || '🤖';
  const vibe = data.vibe || '';
  const divName = divisionNames[division] || division;
  
  const sections = extractSections(body);
  
  let vi = `---\nname: ${name}\n---\n\n`;
  
  // Role overview
  vi += `## ${emoji} Vai trò\n\n`;
  vi += `**${name}** thuộc phòng ban **${divName}**.\n\n`;
  if (description) {
    vi += `${description}\n\n`;
  }
  if (vibe) {
    vi += `> 💡 *${vibe}*\n\n`;
  }
  
  // Process key sections
  let hasCapabilities = false;
  let hasRules = false;
  let hasMetrics = false;
  
  for (const section of sections) {
    const lowerTitle = section.title.toLowerCase();
    
    // Core Capabilities / Core Mission
    if ((lowerTitle.includes('core capabilities') || 
         lowerTitle.includes('core mission') ||
         lowerTitle.includes('role definition')) && !hasCapabilities) {
      hasCapabilities = true;
      vi += `## 📋 Năng lực chính\n\n`;
      const bullets = extractBulletPoints(section.content, 10);
      if (bullets.length > 0) {
        for (const b of bullets) {
          vi += `- ${b}\n`;
        }
      } else {
        // Extract from content directly
        const lines = section.content.split('\n').filter(l => l.trim().length > 10);
        for (const line of lines.slice(0, 6)) {
          const clean = line.replace(/^#+\s*/, '').replace(/\*\*/g, '').trim();
          if (clean) vi += `- ${clean}\n`;
        }
      }
      vi += '\n';
    }
    
    // Specialized Skills
    else if (lowerTitle.includes('specialized') || lowerTitle.includes('skills')) {
      vi += `## 🎯 Kỹ năng chuyên sâu\n\n`;
      const bullets = extractBulletPoints(section.content, 8);
      for (const b of bullets) {
        vi += `- ${b}\n`;
      }
      vi += '\n';
    }
    
    // Decision Framework / When to use
    else if (lowerTitle.includes('decision') || lowerTitle.includes('when to use') || lowerTitle.includes('use this agent')) {
      vi += `## ⚡ Khi nào nên sử dụng\n\n`;
      const bullets = extractBulletPoints(section.content, 8);
      for (const b of bullets) {
        vi += `- ${b}\n`;
      }
      vi += '\n';
    }
    
    // Critical Rules
    else if ((lowerTitle.includes('critical rules') || 
              lowerTitle.includes('key rules') ||
              lowerTitle.includes('constraints')) && !hasRules) {
      hasRules = true;
      vi += `## 🚨 Quy tắc quan trọng\n\n`;
      const bullets = extractBulletPoints(section.content, 6);
      for (const b of bullets) {
        vi += `- ${b}\n`;
      }
      vi += '\n';
    }
    
    // Communication Style
    else if (lowerTitle.includes('communication') || lowerTitle.includes('style')) {
      vi += `## 💬 Phong cách giao tiếp\n\n`;
      const bullets = extractBulletPoints(section.content, 5);
      for (const b of bullets) {
        vi += `- ${b}\n`;
      }
      vi += '\n';
    }
    
    // Success Metrics
    else if (lowerTitle.includes('success') || lowerTitle.includes('metrics')) {
      if (!hasMetrics) {
        hasMetrics = true;
        vi += `## 📊 Chỉ số đo lường\n\n`;
        const bullets = extractBulletPoints(section.content, 6);
        for (const b of bullets) {
          vi += `- ${b}\n`;
        }
        vi += '\n';
      }
    }
    
    // Identity & Memory
    else if (lowerTitle.includes('identity') || lowerTitle.includes('memory')) {
      vi += `## 🧠 Danh tính & Vai trò\n\n`;
      const bullets = extractBulletPoints(section.content, 6);
      for (const b of bullets) {
        vi += `- ${b}\n`;
      }
      vi += '\n';
    }
    
    // Workflow
    else if (lowerTitle.includes('workflow') || lowerTitle.includes('process')) {
      vi += `## 🔄 Quy trình làm việc\n\n`;
      const bullets = extractBulletPoints(section.content, 6);
      for (const b of bullets) {
        vi += `- ${b}\n`;
      }
      vi += '\n';
    }
    
    // Output Format
    else if (lowerTitle.includes('output') || lowerTitle.includes('format') || lowerTitle.includes('response')) {
      vi += `## 📝 Định dạng đầu ra\n\n`;
      const bullets = extractBulletPoints(section.content, 5);
      for (const b of bullets) {
        vi += `- ${b}\n`;
      }
      vi += '\n';
    }
  }
  
  // Usage tips
  vi += `## ⚙️ Lưu ý khi sử dụng\n\n`;
  vi += `- Cung cấp thông tin cụ thể về dự án, mục tiêu và bối cảnh để nhận được kết quả tốt nhất\n`;
  vi += `- Agent này phù hợp nhất với ChatGPT-4, Claude hoặc Antigravity\n`;
  vi += `- Có thể kết hợp với các Agent khác trong phòng ban ${divName} để tạo workflow hoàn chỉnh\n\n`;
  
  // Footer note
  vi += `> 💡 Nút **Copy Prompt** luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.\n`;
  
  return vi;
}

// ============================================
// Main execution
// ============================================

function main() {
  const divisions = fs.readdirSync(AGENTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
  
  let total = 0;
  let created = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const division of divisions) {
    const divPath = path.join(AGENTS_DIR, division);
    const files = fs.readdirSync(divPath)
      .filter(f => f.endsWith('.md') && !f.endsWith('.vi.md'));
    
    for (const file of files) {
      total++;
      const viFile = file.replace('.md', '.vi.md');
      const viPath = path.join(divPath, viFile);
      
      try {
        const content = fs.readFileSync(path.join(divPath, file), 'utf-8');
        const { data, body } = parseFrontmatter(content);
        const viContent = generateVietnamese(data, body, division);
        
        fs.writeFileSync(viPath, viContent, 'utf-8');
        created++;
        
        if (created % 20 === 0) {
          console.log(`  ... ${created} files created`);
        }
      } catch (err) {
        errors++;
        console.error(`  ❌ Error: ${file} — ${err.message}`);
      }
    }
    
    const divFiles = files.length;
    console.log(`✅ ${division}: ${divFiles} agents translated`);
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total agents: ${total}`);
  console.log(`   Created: ${created}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Errors: ${errors}`);
}

main();
