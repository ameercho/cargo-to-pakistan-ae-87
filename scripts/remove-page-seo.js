#!/usr/bin/env node

// Script to remove all PageSEO imports and usages
// This automates the removal of duplicate SEO injection

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Files that need PageSEO removal
const filesToProcess = [
  'src/pages/services/AirFreightCargo.tsx',
  'src/pages/services/Consulting.tsx',
  'src/pages/services/CourierService.tsx',
  'src/pages/services/CustomsClearance.tsx',
  'src/pages/services/FullContainer.tsx',
  'src/pages/services/Insurance.tsx',
  'src/pages/services/Packaging.tsx',
  'src/pages/services/SeaFreight.tsx',
  'src/pages/services/SecureHandling.tsx',
  'src/pages/services/Warehousing.tsx'
];

function removePageSEOFromFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove PageSEO import
    const importRegex = /import\s+PageSEO\s+from\s+["']@\/components\/SEO\/PageSEO["'];\s*/g;
    if (importRegex.test(content)) {
      content = content.replace(importRegex, '');
      modified = true;
    }

    // Remove PageSEO component usage (multiline)
    const pageSEORegex = /<PageSEO[\s\S]*?\/>/g;
    if (pageSEORegex.test(content)) {
      content = content.replace(pageSEORegex, '');
      modified = true;
    }

    // Clean up any double line breaks
    content = content.replace(/\n\n\n+/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned: ${filePath}`);
      return true;
    } else {
      console.log(`📄 No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🧹 Starting PageSEO cleanup...\n');
  
  let processedCount = 0;
  let modifiedCount = 0;

  filesToProcess.forEach(filePath => {
    processedCount++;
    const wasModified = removePageSEOFromFile(filePath);
    if (wasModified) modifiedCount++;
  });

  console.log('\n📊 Cleanup Summary:');
  console.log(`   Files processed: ${processedCount}`);
  console.log(`   Files modified: ${modifiedCount}`);
  console.log('✨ PageSEO cleanup complete!');
}

// Run the cleanup
main();