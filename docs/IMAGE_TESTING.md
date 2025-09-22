# Image Path Testing

This document describes the automated testing system for validating image paths in the Clarke Moyer website.

## Problem Addressed

When deploying to GitHub Pages, the site is served from a subdirectory (e.g., `https://clarkemoyer.github.io/clarkemoyer.com/`). This means all asset paths must include the proper `basePath` prefix to load correctly.

Without proper basePath handling:
- ❌ **Broken**: `/images/photo.jpg` → 404 error on GitHub Pages
- ✅ **Working**: `/clarkemoyer.com/images/photo.jpg` → Loads correctly

## Test Implementation

### Automated Validation Script

The `tests/validate-image-paths.js` script automatically:

1. **Scans** all HTML files in the `out/` directory after build
2. **Extracts** image paths from:
   - `<img src="...">` attributes
   - CSS `background-image: url(...)` properties
3. **Validates** that paths are appropriate for the deployment mode:
   - **GitHub Pages mode**: All paths must start with `/clarkemoyer.com`
   - **Local development**: Paths should NOT include the basePath
4. **Verifies** that image files actually exist in the output directory

### Test Commands

```bash
# Test for local development (no basePath expected)
npm run test:images

# Test for GitHub Pages deployment (basePath required)
npm run test:images:github

# Build and test in one command
npm run build && npm run test:images:github
```

### GitHub Actions Integration

The image validation test is automatically run in the CI/CD pipeline:

```yaml
- name: Build with Next.js
  run: npx next build
- name: Validate image paths
  run: npm run test:images:github
  env:
    GITHUB_ACTIONS: true
```

This ensures that:
- Every pull request is tested for proper image paths
- Deployments are blocked if image paths are incorrect
- No broken images reach the live site

## Test Output Example

### ✅ Success Case
```
🖼️  Image Path Validation Test
================================

🔍 Scanning mode: GitHub Pages
📁 Output directory: /home/project/out

📊 Test Results:
   Total images found: 8
   Valid paths: 8
   Invalid paths: 0
   Missing images: 0

✅ All image paths are valid!
```

### ❌ Failure Case
```
📊 Test Results:
   Total images found: 8
   Valid paths: 0
   Invalid paths: 8
   Missing images: 1

❌ Issues found:
   1. index.html:1
      Path: /images/photo.jpg
      Issue: Missing basePath prefix. Expected to start with '/clarkemoyer.com'

💡 Total issues: 8

🔧 To fix image path issues:
   1. Ensure all Image components use the basePath variable
   2. Example: src={`${basePath}/images/photo.jpg`}
   3. Verify images exist in the public directory
```

## Code Implementation

### Correct Usage in Components

```typescript
// Get the basePath for GitHub Pages deployment
const basePath = process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '';

// ✅ Correct: Dynamic basePath for all images
<Image
  src={`${basePath}/images/photo.jpg`}
  alt="Description"
  width={200}
  height={200}
/>

// ✅ Correct: CSS background images
<div style={{
  backgroundImage: `url('${basePath}/images/background.jpg')`
}} />

// ❌ Incorrect: Hardcoded path
<Image src="/images/photo.jpg" alt="Description" />
```

### Layout Configuration

The basePath is configured in both:

1. **next.config.js**: For Next.js build configuration
```javascript
basePath: process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '',
```

2. **Component level**: For runtime image paths
```typescript
const basePath = process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '';
```

## Maintenance

### Adding New Images

When adding new images to components:

1. Place the image file in the `public/` directory
2. Use the basePath variable in your component:
   ```typescript
   <Image src={`${basePath}/images/new-photo.jpg`} ... />
   ```
3. Run the test to verify: `npm run test:images:github`

### Troubleshooting

**Test fails with "Missing basePath prefix"**
- Ensure you're using `${basePath}` in all image paths
- Check that the basePath variable is properly defined in your component

**Test fails with "Image file does not exist"**
- Verify the image file is in the `public/` directory
- Check file name spelling and case sensitivity
- Ensure the file is being copied to the `out/` directory during build

**Test passes locally but fails in CI**
- Make sure you're testing with `npm run test:images:github`
- Verify the `GITHUB_ACTIONS` environment variable is set properly

## Benefits

✅ **Prevents broken images** on the live site  
✅ **Catches issues early** in development  
✅ **Automated testing** in CI/CD pipeline  
✅ **Clear error messages** for quick fixes  
✅ **Consistent deployment** across environments