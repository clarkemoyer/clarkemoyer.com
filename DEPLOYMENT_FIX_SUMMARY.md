# Staging Custom Domain Deployment Fix - Summary

## Issue
The site was not deploying correctly to `staging.clarkemoyer.com`. Images and assets were broken because the site was being built with the wrong configuration for a custom domain deployment.

## Root Cause
The GitHub Actions workflows were building the site with `USE_BASE_PATH=true`, which adds `/clarkemoyer.com/` prefix to all asset paths. This is correct for GitHub Pages subdirectory deployment (`clarkemoyer.github.io/clarkemoyer.com`) but **incorrect** for custom domain deployment (`staging.clarkemoyer.com`).

When deployed to a custom domain, assets were being requested with incorrect paths like:
- ❌ `https://staging.clarkemoyer.com/clarkemoyer.com/images/photo.jpg`

Instead of:
- ✅ `https://staging.clarkemoyer.com/images/photo.jpg`

## Changes Made

### 1. Workflow Updates
**Files Changed:**
- `.github/workflows/deploy.yml`
- `.github/workflows/nextjs.yml`

**Changes:**
- Changed `USE_BASE_PATH: true` to `USE_BASE_PATH: false` in build steps
- Changed image validation from `test:images:github` to `test:images`
- Updated deployment URL to `https://staging.clarkemoyer.com`

### 2. CNAME File Added
**File Created:** `public/CNAME`

**Content:**
```
staging.clarkemoyer.com
```

This file tells GitHub Pages which custom domain to use for the deployment.

### 3. Documentation Updates
**Files Updated:**
- `README.md` - Updated deployment section to reflect current configuration
- `docs/DEPLOYMENT.md` - Complete rewrite to clarify:
  - Current deployment configuration (custom domain mode)
  - Alternative deployment mode (subdirectory mode)
  - Troubleshooting steps
  - Important note about GitHub Pages limitation (one custom domain per repository)

## How It Works Now

### Build Process
1. Code is pushed to `main` branch
2. GitHub Actions workflow triggers
3. Site is built WITHOUT basePath (`USE_BASE_PATH=false`)
4. All assets use root-relative paths (e.g., `/images/photo.jpg`)
5. CNAME file is included in the build output
6. Site is deployed to GitHub Pages
7. GitHub Pages serves the site at `staging.clarkemoyer.com`

### Asset Path Resolution
```
# In next.config.js:
basePath: process.env.USE_BASE_PATH === 'true' ? '/clarkemoyer.com' : ''

# When USE_BASE_PATH is false or unset:
basePath: ''  // No prefix added

# Result:
backgroundImage: `url('/wp-content/uploads/2020/08/Grand-Canyon-2019-Family-Photo.jpg')`
src: "/images/Clarke-Moyer-CM-Logo-3D-Black-scaled.jpg"
```

## Testing Performed
- ✅ Build completes successfully without errors
- ✅ Linting passes with no warnings
- ✅ Image path validation passes (9/9 images valid)
- ✅ CNAME file is correctly included in build output
- ✅ All asset paths are root-relative (no `/clarkemoyer.com/` prefix)

## What To Expect After Deployment

Once this PR is merged and deployed:

1. **Site Will Load At:** `https://staging.clarkemoyer.com`
2. **All Images Will Display Correctly:** Hero background, logos, photos
3. **All Assets Will Load From Root:** CSS, JS, images
4. **No 404 Errors:** All paths will be correct

## Important Notes

### GitHub Pages Limitation
GitHub Pages only allows **ONE custom domain per repository**. You cannot deploy to both:
- `clarkemoyer.github.io/clarkemoyer.com` (subdirectory), AND
- `staging.clarkemoyer.com` (custom domain)

You must choose one. This repository is now configured for custom domain deployment.

### If You Need To Switch Back
To switch back to subdirectory deployment:
1. Remove custom domain from GitHub Pages settings
2. Delete `public/CNAME` file
3. Update workflows to use `USE_BASE_PATH: true`
4. Site will be available at `clarkemoyer.github.io/clarkemoyer.com`

See `docs/DEPLOYMENT.md` for detailed instructions.

## Files Changed
```
.github/workflows/deploy.yml       - Updated build config
.github/workflows/nextjs.yml       - Updated build config
public/CNAME                       - Added (new file)
README.md                          - Updated documentation
docs/DEPLOYMENT.md                 - Updated documentation
```

## Verification Steps After Deployment

1. Visit `https://staging.clarkemoyer.com`
2. Verify hero image (Grand Canyon family photo) displays
3. Verify all logos and images display
4. Open browser DevTools → Network tab
5. Verify no 404 errors for images or assets
6. Verify all image URLs do NOT include `/clarkemoyer.com/` prefix
7. Check that the site is served over HTTPS (GitHub Pages auto-SSL)

## References
- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Repository deployment guide: `docs/DEPLOYMENT.md`
