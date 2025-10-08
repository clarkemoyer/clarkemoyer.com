# Deployment Guide

This guide explains how to deploy the Clarke Moyer website to different environments.

## Deployment Modes

The site supports two deployment modes, each requiring different configuration:

### 1. GitHub Pages Subdirectory Mode

**Use Case**: Deploying to `https://clarkemoyer.github.io/clarkemoyer.com/`

**Configuration**:
- Build with `USE_BASE_PATH=true`
- All assets will include the `/clarkemoyer.com` basePath prefix
- This is the default for GitHub Actions workflows

**Setup**:
1. Ensure `.github/workflows/deploy.yml` includes:
   ```yaml
   - name: Build with Next.js
     run: npm run build
     env:
       USE_BASE_PATH: true
   ```

2. Push to `main` branch - deployment happens automatically

3. Site will be available at: `https://clarkemoyer.github.io/clarkemoyer.com/`

### 2. Custom Domain Mode

**Use Case**: Deploying to custom domains like:
- `https://staging.clarkemoyer.com`
- `https://clarkemoyer.com`
- Any other custom domain

**Configuration**:
- Build **without** `USE_BASE_PATH` environment variable (or set to `false`)
- All assets will load from the root path
- No basePath prefix is added

**Setup for GitHub Pages with Custom Domain**:

1. **Configure Domain in GitHub**:
   - Go to repository **Settings** → **Pages**
   - Under **Custom domain**, enter your domain (e.g., `staging.clarkemoyer.com`)
   - GitHub will verify DNS and create a CNAME file

2. **Add CNAME file to repository** (optional - GitHub creates this automatically):
   ```bash
   # Create CNAME file in public directory
   echo "staging.clarkemoyer.com" > public/CNAME
   ```

3. **Update deployment workflow** for custom domain:
   ```yaml
   # .github/workflows/deploy-staging.yml
   name: Deploy to Staging

   on:
     push:
       branches: ["staging"]  # or your staging branch

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

         - name: Build without basePath
           run: npm run build
           # NOTE: No USE_BASE_PATH environment variable!

         - name: Validate image paths
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
         url: ${{ steps.deployment.outputs.page_url }}
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

5. **Push to your branch** - deployment happens automatically

6. **Verify deployment**:
   - Visit your custom domain
   - Check that images and assets load correctly
   - Verify no 404 errors in browser console

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

**Symptom**: Images return 404 errors, paths include `/clarkemoyer.com/`

**Solution**: Rebuild without `USE_BASE_PATH`:
```bash
npm run build
```

### Images Not Loading on GitHub Pages Subdirectory

**Symptom**: Images return 404 errors, paths don't include `/clarkemoyer.com/`

**Solution**: Rebuild with `USE_BASE_PATH=true`:
```bash
USE_BASE_PATH=true npm run build
```

### Custom Domain Not Working

**Checklist**:
1. ✅ DNS records configured correctly
2. ✅ CNAME file exists in repository
3. ✅ GitHub Pages settings show custom domain
4. ✅ Site built without `USE_BASE_PATH`
5. ✅ Wait 24-48 hours for DNS propagation

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
