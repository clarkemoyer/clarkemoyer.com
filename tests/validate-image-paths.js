#!/usr/bin/env node

/**
 * Image Path Validation Test
 * 
 * This script validates that all image paths in the built output correctly
 * include the GitHub Pages basePath when deployed. This ensures no broken
 * images appear on the live site.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const OUT_DIR = path.join(__dirname, '..', 'out');
const BASE_PATH = '/clarkemoyer.com';
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

// Test results
let testResults = {
  totalImages: 0,
  validPaths: 0,
  invalidPaths: 0,
  missingImages: 0,
  errors: []
};

/**
 * Check if a file exists in the output directory
 */
function doesImageExist(imagePath) {
  // Remove the basePath prefix if it exists
  const relativePath = imagePath.startsWith(BASE_PATH) 
    ? imagePath.substring(BASE_PATH.length)
    : imagePath;
  
  const fullPath = path.join(OUT_DIR, relativePath);
  return fs.existsSync(fullPath);
}

/**
 * Validate image paths in HTML content
 */
function validateImagePaths(htmlContent, fileName) {
  const errors = [];
  
  // Find all img src attributes
  const imgSrcRegex = /src=["']([^"']+)["']/g;
  let match;
  
  while ((match = imgSrcRegex.exec(htmlContent)) !== null) {
    const imagePath = match[1];
    
    // Skip external URLs and data URLs
    if (imagePath.startsWith('http') || imagePath.startsWith('data:') || imagePath.startsWith('//')) {
      continue;
    }
    
    // Check if it's an image file
    const hasImageExtension = IMAGE_EXTENSIONS.some(ext => 
      imagePath.toLowerCase().includes(ext)
    );
    
    if (!hasImageExtension) {
      continue;
    }
    
    testResults.totalImages++;
    
    // In GitHub Actions mode, all image paths should include the basePath
    if (process.env.GITHUB_ACTIONS || process.env.TEST_GITHUB_MODE) {
      if (!imagePath.startsWith(BASE_PATH)) {
        testResults.invalidPaths++;
        errors.push({
          file: fileName,
          path: imagePath,
          issue: `Missing basePath prefix. Expected to start with '${BASE_PATH}'`,
          line: getLineNumber(htmlContent, match.index)
        });
      } else {
        testResults.validPaths++;
      }
    } else {
      // In local development, paths should NOT include basePath
      if (imagePath.startsWith(BASE_PATH)) {
        testResults.invalidPaths++;
        errors.push({
          file: fileName,
          path: imagePath,
          issue: `Unexpected basePath prefix in local mode`,
          line: getLineNumber(htmlContent, match.index)
        });
      } else {
        testResults.validPaths++;
      }
    }
    
    // Check if the image file actually exists
    if (!doesImageExist(imagePath)) {
      testResults.missingImages++;
      errors.push({
        file: fileName,
        path: imagePath,
        issue: `Image file does not exist in output directory`,
        line: getLineNumber(htmlContent, match.index)
      });
    }
  }
  
  // Find CSS background-image URLs (handle HTML entities and complex CSS)
  const bgImageRegex = /background-image:\s*[^;}]*url\(\s*([^)]+?)\s*\)/g;
  while ((match = bgImageRegex.exec(htmlContent)) !== null) {
    let imagePath = match[1];
    
    // Clean up the path - remove quotes and decode HTML entities
    imagePath = imagePath
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/['"`]/g, '')
      .trim();
    
    // Also check for the most common pattern where quotes are already HTML entities
    if (imagePath.includes('&#x27;')) {
      // Skip background images with broken HTML entities
      continue;
    }
    
    // Skip external URLs and data URLs
    if (imagePath.startsWith('http') || imagePath.startsWith('data:') || imagePath.startsWith('//')) {
      continue;
    }
    
    // Check if it's an image file
    const hasImageExtension = IMAGE_EXTENSIONS.some(ext => 
      imagePath.toLowerCase().includes(ext)
    );
    
    if (!hasImageExtension) {
      continue;
    }
    
    testResults.totalImages++;
    
    // Apply same validation logic as img src
    if (process.env.GITHUB_ACTIONS || process.env.TEST_GITHUB_MODE) {
      if (!imagePath.startsWith(BASE_PATH)) {
        testResults.invalidPaths++;
        errors.push({
          file: fileName,
          path: imagePath,
          issue: `Background image missing basePath prefix. Expected to start with '${BASE_PATH}'`,
          line: getLineNumber(htmlContent, match.index)
        });
      } else {
        testResults.validPaths++;
      }
    } else {
      if (imagePath.startsWith(BASE_PATH)) {
        testResults.invalidPaths++;
        errors.push({
          file: fileName,
          path: imagePath,
          issue: `Background image has unexpected basePath prefix in local mode`,
          line: getLineNumber(htmlContent, match.index)
        });
      } else {
        testResults.validPaths++;
      }
    }
    
    // Check if the image file exists
    if (!doesImageExist(imagePath)) {
      testResults.missingImages++;
      errors.push({
        file: fileName,
        path: imagePath,
        issue: `Background image file does not exist in output directory`,
        line: getLineNumber(htmlContent, match.index)
      });
    }
  }
  
  return errors;
}

/**
 * Get line number for a given character index in text
 */
function getLineNumber(text, index) {
  return text.substring(0, index).split('\n').length;
}

/**
 * Recursively scan HTML files in directory
 */
function scanDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (item.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const relativePath = path.relative(OUT_DIR, fullPath);
      const errors = validateImagePaths(content, relativePath);
      testResults.errors.push(...errors);
    }
  }
}

/**
 * Main test function
 */
function runImagePathValidation() {
  console.log('🖼️  Image Path Validation Test');
  console.log('================================');
  console.log();
  
  // Check if output directory exists
  if (!fs.existsSync(OUT_DIR)) {
    console.error('❌ Output directory not found. Please run "npm run build" first.');
    process.exit(1);
  }
  
  const mode = (process.env.GITHUB_ACTIONS || process.env.TEST_GITHUB_MODE) 
    ? 'GitHub Pages' 
    : 'Local Development';
  
  console.log(`🔍 Scanning mode: ${mode}`);
  console.log(`📁 Output directory: ${OUT_DIR}`);
  console.log();
  
  // Scan all HTML files
  scanDirectory(OUT_DIR);
  
  // Print results
  console.log('📊 Test Results:');
  console.log(`   Total images found: ${testResults.totalImages}`);
  console.log(`   Valid paths: ${testResults.validPaths}`);
  console.log(`   Invalid paths: ${testResults.invalidPaths}`);
  console.log(`   Missing images: ${testResults.missingImages}`);
  console.log();
  
  // Print errors
  if (testResults.errors.length > 0) {
    console.log('❌ Issues found:');
    testResults.errors.forEach((error, index) => {
      console.log(`   ${index + 1}. ${error.file}:${error.line}`);
      console.log(`      Path: ${error.path}`);
      console.log(`      Issue: ${error.issue}`);
      console.log();
    });
    
    console.log(`💡 Total issues: ${testResults.errors.length}`);
    console.log();
    console.log('🔧 To fix image path issues:');
    console.log('   1. Ensure all Image components use the basePath variable');
    console.log('   2. Example: src={`${basePath}/images/photo.jpg`}');
    console.log('   3. Verify images exist in the public directory');
    
    process.exit(1);
  } else {
    console.log('✅ All image paths are valid!');
    
    if (testResults.totalImages === 0) {
      console.log('⚠️  No images found. This might indicate an issue with the test.');
    }
    
    process.exit(0);
  }
}

// Run the test
runImagePathValidation();