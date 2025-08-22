#!/usr/bin/env node

// SEO validation script for build-time checks
// Run with: node scripts/validate-seo.js

const fs = require('fs');
const path = require('path');

// Import the SEO injector
const { injectMetadata } = require('../utils/simple-seo-injector.js');

// Define all routes that should have SEO
const routes = [
  '/',
  '/services',
  '/services/air-freight',
  '/services/sea-freight',
  '/services/warehousing',
  '/about',
  '/contact',
  '/dubai-to-pakistan',
  '/abu-dhabi-to-pakistan',
  '/sharjah-to-pakistan',
  '/ajman-to-pakistan',
  '/pakistan-cargo-to-karachi',
  '/pakistan-cargo-to-lahore',
  '/pakistan-cargo-to-islamabad',
  '/pakistan-cargo-to-peshawar',
  '/pakistan-cargo-to-faisalabad',
  '/pakistan-cargo-to-multan',
  '/areas/dubai',
  '/areas/abu-dhabi',
  '/areas/sharjah',
  '/areas/ajman'
];

// SEO validation function
function validateSEO(route, seoData) {
  const warnings = [];
  const errors = [];

  // Check title length
  if (!seoData.title) {
    errors.push('Missing title');
  } else if (seoData.title.length > 60) {
    warnings.push(`Title too long: ${seoData.title.length} chars (recommended: ≤60)`);
  } else if (seoData.title.length < 30) {
    warnings.push(`Title too short: ${seoData.title.length} chars (recommended: ≥30)`);
  }

  // Check description length
  if (!seoData.description) {
    errors.push('Missing description');
  } else if (seoData.description.length > 160) {
    warnings.push(`Description too long: ${seoData.description.length} chars (recommended: ≤160)`);
  } else if (seoData.description.length < 120) {
    warnings.push(`Description too short: ${seoData.description.length} chars (recommended: ≥120)`);
  }

  // Check keywords
  if (!seoData.keywords) {
    warnings.push('Missing keywords');
  }

  // Check Open Graph data
  if (!seoData.ogTitle) {
    warnings.push('Missing Open Graph title');
  }
  if (!seoData.ogDescription) {
    warnings.push('Missing Open Graph description');
  }
  if (!seoData.ogImage) {
    warnings.push('Missing Open Graph image');
  }

  // Check for target keywords
  const targetKeywords = ['pakistan', 'cargo', 'uae', 'shipping'];
  const hasTargetKeywords = targetKeywords.some(keyword => 
    seoData.title?.toLowerCase().includes(keyword) || 
    seoData.description?.toLowerCase().includes(keyword)
  );
  
  if (!hasTargetKeywords) {
    warnings.push('Missing target keywords (pakistan, cargo, uae, shipping)');
  }

  return { warnings, errors };
}

// Extract SEO data from injected HTML
function extractSEOFromHTML(html) {
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="(.*?)"/);
  const keywordsMatch = html.match(/<meta name="keywords" content="(.*?)"/);
  const ogTitleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
  const ogDescMatch = html.match(/<meta property="og:description" content="(.*?)"/);
  const ogImageMatch = html.match(/<meta property="og:image" content="(.*?)"/);

  return {
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1] : null,
    keywords: keywordsMatch ? keywordsMatch[1] : null,
    ogTitle: ogTitleMatch ? ogTitleMatch[1] : null,
    ogDescription: ogDescMatch ? ogDescMatch[1] : null,
    ogImage: ogImageMatch ? ogImageMatch[1] : null
  };
}

// Main validation function
function runSEOValidation() {
  console.log('🔍 Starting SEO validation...\n');
  
  let totalWarnings = 0;
  let totalErrors = 0;
  const results = [];

  routes.forEach(route => {
    console.log(`📄 Validating route: ${route}`);
    
    try {
      // Simulate HTML injection
      const mockHTML = '<!--seo-head-->';
      const injectedHTML = injectMetadata(mockHTML, route);
      const seoData = extractSEOFromHTML(injectedHTML);
      
      const validation = validateSEO(route, seoData);
      
      if (validation.errors.length > 0) {
        console.log(`   ❌ Errors: ${validation.errors.join(', ')}`);
        totalErrors += validation.errors.length;
      }
      
      if (validation.warnings.length > 0) {
        console.log(`   ⚠️  Warnings: ${validation.warnings.join(', ')}`);
        totalWarnings += validation.warnings.length;
      }
      
      if (validation.errors.length === 0 && validation.warnings.length === 0) {
        console.log('   ✅ SEO validation passed');
      }
      
      results.push({
        route,
        seoData,
        validation
      });
      
    } catch (error) {
      console.log(`   💥 Error processing route: ${error.message}`);
      totalErrors++;
    }
    
    console.log('');
  });

  // Summary
  console.log('📊 SEO Validation Summary');
  console.log('========================');
  console.log(`Total routes validated: ${routes.length}`);
  console.log(`Total warnings: ${totalWarnings}`);
  console.log(`Total errors: ${totalErrors}`);
  
  if (totalErrors > 0) {
    console.log('\n❌ SEO validation failed with errors!');
    process.exit(1);
  } else if (totalWarnings > 0) {
    console.log('\n⚠️  SEO validation completed with warnings.');
  } else {
    console.log('\n✅ SEO validation passed successfully!');
  }
  
  return results;
}

// Run validation if called directly
if (require.main === module) {
  runSEOValidation();
}

module.exports = { runSEOValidation, validateSEO };