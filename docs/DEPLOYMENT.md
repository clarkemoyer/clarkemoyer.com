# Deployment Guide

This guide explains how to deploy the Clarke Moyer website to different environments.

## Current Deployment Configuration

⚠️ **Important**: This repository is currently configured for custom domain deployment.

- **Domain**: `staging.clarkemoyer.com`
- **Build Mode**: WITHOUT `USE_BASE_PATH`
- **Asset Paths**: Root-relative (e.g., `/images/photo.jpg`)
- **CNAME File**: `public/CNAME` contains `staging.clarkemoyer.com`

## Deployment Modes

The site supports two deployment modes, but **GitHub Pages only allows ONE custom domain per repository**. Choose the mode that matches your deployment target.

### 1. Custom Domain Mode (CURRENT)

**Use Case**: Deploying to custom domains like:
- `https://staging.clarkemoyer.com` ✅ Currently Active
- `https://clarkemoyer.com`
- Any other custom domain

**Configuration**:
- Build **without** `USE_BASE_PATH` environment variable
- All assets will load from the root path
- CNAME file in `public` directory

**Setup for GitHub Pages with Custom Domain**:

1. **Configure Domain in GitHub**:
   - Go to repository **Settings** → **Pages**
   - Under **Custom domain**, enter your domain (e.g., `staging.clarkemoyer.com`)
   - GitHub will verify DNS and may create a CNAME file

2. **Add CNAME file to repository**:
   ```bash
   # Create CNAME file in public directory
   echo "staging.clarkemoyer.com" > public/CNAME
   ```

3. **Update deployment workflow** (already configured in this repository):
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ["main"]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build without basePath for custom domain
           run: npm run build
           env:
             USE_BASE_PATH: false
           # NOTE: USE_BASE_PATH must be false for custom domain deployment

         - name: Validate image paths for custom domain
           run: npm run test:images

         - name: Add .nojekyll file
           run: touch ./out/.nojekyll

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out
   
     deploy:
       environment:
         name: github-pages
         url: https://staging.clarkemoyer.com
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

4. **Configure DNS**:
   - For apex domain (`clarkemoyer.com`):
     ```
     A     185.199.108.153
     A     185.199.109.153
     A     185.199.110.153
     A     185.199.111.153
     ```
   
   - For subdomain (`staging.clarkemoyer.com`):
     ```
     CNAME staging.clarkemoyer.com -> clarkemoyer.github.io
     ```

5. **Push to `main` branch** - deployment happens automatically

6. **Verify deployment**:
   - Visit your custom domain
   - Check that images and assets load correctly (paths should NOT include `/clarkemoyer.com/`)
   - Verify no 404 errors in browser console

### 2. GitHub Pages Subdirectory Mode (ALTERNATIVE)

**Use Case**: Deploying to `https://clarkemoyer.github.io/clarkemoyer.com/`

⚠️ **Note**: To use this mode, you must:
1. Remove the custom domain from GitHub Pages settings
2. Delete the `public/CNAME` file
3. Update the workflow as shown below

**Configuration**:
- Build with `USE_BASE_PATH=true`
- All assets will include the `/clarkemoyer.com` basePath prefix

**Setup**:
1. **Remove custom domain**:
   - Go to repository **Settings** → **Pages**
   - Clear the **Custom domain** field
   - Delete `public/CNAME` file from repository

2. **Update workflow**:
   ```yaml
   # .github/workflows/deploy.yml
   - name: Build with Next.js
     run: npm run build
     env:
       USE_BASE_PATH: true
   
   - name: Validate image paths
     run: npm run test:images:github
     env:
       USE_BASE_PATH: true
   ```

3. **Push to `main` branch** - deployment happens automatically

4. **Site will be available at**: `https://clarkemoyer.github.io/clarkemoyer.com/`

## Manual Deployment

### Build for GitHub Pages Subdirectory
```bash
USE_BASE_PATH=true npm run build
npm run test:images:github

# Deploy the 'out' directory to GitHub Pages
```

### Build for Custom Domain
```bash
npm run build
npm run test:images

# Deploy the 'out' directory to your hosting service
```

## Deployment to Other Hosting Services

The site can be deployed to any static hosting service:

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. No environment variables needed

### Vercel
1. Framework preset: Next.js
2. Build command: `npm run build`
3. Output directory: `out`
4. No environment variables needed

### AWS S3 / CloudFront
```bash
npm run build
aws s3 sync out/ s3://your-bucket-name/ --delete
```

### Any Static Host
```bash
npm run build
# Upload contents of 'out' directory to your web server
```

## Troubleshooting

### Images Not Loading on Custom Domain

**Symptom**: Images return 404 errors, paths include `/clarkemoyer.com/` prefix

**Root Cause**: Site was built with `USE_BASE_PATH=true` but is deployed to a custom domain

**Solution**: 
1. Ensure workflows build without `USE_BASE_PATH` (or set to `false`):
   ```yaml
   - name: Build with Next.js
     run: npm run build
     env:
       USE_BASE_PATH: false
   ```
2. Rebuild and redeploy:
   ```bash
   npm run build
   npm run test:images  # Should pass without errors
   ```
3. Verify CNAME file exists in `public` directory

### Images Not Loading on GitHub Pages Subdirectory

**Symptom**: Images return 404 errors, paths don't include `/clarkemoyer.com/` prefix

**Root Cause**: Site was built without `USE_BASE_PATH` but is deployed to subdirectory

**Solution**: Rebuild with `USE_BASE_PATH=true`:
```bash
USE_BASE_PATH=true npm run build
npm run test:images:github  # Should pass without errors
```

### Custom Domain Not Working

**Checklist**:
1. ✅ DNS records configured correctly
2. ✅ CNAME file exists in `public` directory with correct domain
3. ✅ GitHub Pages settings show custom domain
4. ✅ Site built without `USE_BASE_PATH` (or set to `false`)
5. ✅ Workflows updated to use `test:images` instead of `test:images:github`
6. ✅ Wait 24-48 hours for DNS propagation

**Current Configuration**:
- Domain: `staging.clarkemoyer.com`
- CNAME file location: `public/CNAME`
- Build setting: `USE_BASE_PATH=false`
- Image validation: `npm run test:images`

### SSL Certificate Issues

GitHub Pages automatically provisions SSL certificates for custom domains. This can take a few minutes after DNS configuration.

If SSL doesn't work after 24 hours:
1. Remove custom domain from GitHub Pages settings
2. Wait 5 minutes
3. Re-add custom domain
4. Wait for certificate provisioning

## Testing Before Deployment

Always test your build before deploying:

```bash
# Build for your target environment
npm run build  # or USE_BASE_PATH=true npm run build

# Run validation tests
npm run test:images  # or npm run test:images:github

# Run linter
npm run lint

# Manually check the output
ls -la out/
```

## Best Practices

1. **Always validate images** after build
2. **Use appropriate test** for your deployment mode
3. **Test locally** before pushing to production
4. **Monitor deployment logs** in GitHub Actions
5. **Check browser console** after deployment for any errors
6. **Document custom configuration** in repository README

## Support

For issues with deployment:
1. Check GitHub Actions logs
2. Review this documentation
3. Verify DNS settings with your domain provider
4. Open an issue in the repository
