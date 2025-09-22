# GitHub Configuration and CI/CD

This directory contains GitHub-specific configurations for automated deployment and continuous integration of the clarkemoyer.com website.

## 📁 Directory Structure

```
.github/
├── workflows/          # GitHub Actions workflow definitions
│   ├── deploy.yml     # Production deployment to GitHub Pages
│   └── nextjs.yml     # Alternative Next.js workflow (currently unused)
└── README.md          # This documentation file
```

## 🚀 Deployment Workflow

### Primary Deployment (`deploy.yml`)

The main deployment workflow handles the complete build and deployment process:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:
```

#### Workflow Triggers
- **Automatic**: Every push to the `main` branch
- **Manual**: Via GitHub Actions tab (workflow_dispatch)

#### Workflow Steps

1. **Environment Setup**
   - Ubuntu latest runner
   - Node.js 20 with npm caching
   - Proper permissions for GitHub Pages

2. **Build Process**
   - Checkout source code
   - Install dependencies with `npm ci`
   - Build Next.js application with static export
   - Generate optimized static files in `out/` directory

3. **GitHub Pages Preparation**
   - Add `.nojekyll` file to disable Jekyll processing
   - Upload build artifacts for deployment

4. **Deployment**
   - Deploy static files to GitHub Pages
   - Update live site automatically

### Workflow Configuration Details

#### Permissions
```yaml
permissions:
  contents: read    # Read repository contents
  pages: write      # Write to GitHub Pages
  id-token: write   # OIDC token for secure deployment
```

#### Concurrency Control
```yaml
concurrency:
  group: "pages"
  cancel-in-progress: false
```
- Ensures only one deployment runs at a time
- Prevents conflicts during deployment process

#### Environment Variables
- `GITHUB_ACTIONS: true` - Enables GitHub Actions-specific configurations
- Automatically provides GitHub token for authentication

## 🔧 Configuration Features

### Static Site Generation

The workflow is specifically configured for Next.js static export:

```bash
npm run build  # Builds and exports to out/ directory
```

**Next.js Configuration (next.config.js):**
- `output: 'export'` - Enables static file generation
- `trailingSlash: true` - Required for GitHub Pages routing
- `images: { unoptimized: true }` - Optimizes for static hosting

### GitHub Pages Optimization

#### Jekyll Bypass
```bash
touch ./out/.nojekyll
```
- Prevents GitHub Pages from processing files with Jekyll
- Ensures Next.js routing works correctly
- Allows files with underscores (Next.js assets)

#### Asset Handling
- All static assets are properly copied to output directory
- CSS, JavaScript, and image files maintain proper paths
- Font files and other assets are preserved

## 📊 Deployment Performance

### Build Metrics
- **Average Build Time**: 2-3 minutes
- **Asset Size**: ~100KB total JavaScript
- **Pages Generated**: 12 static pages
- **Deployment Time**: 30-60 seconds

### Performance Optimizations
- **npm ci**: Fast, reproducible installs
- **Node.js 20**: Latest LTS for optimal performance
- **Caching**: npm dependencies cached between runs
- **Concurrent Jobs**: Build and deploy run in sequence for stability

## 🔍 Monitoring and Debugging

### Build Status
- Build status visible in GitHub Actions tab
- Commit status checks on pull requests
- Deployment status on repository main page

### Common Issues and Solutions

#### Build Failures
```bash
# Check build logs in GitHub Actions
# Common causes:
- TypeScript compilation errors
- Missing dependencies
- Content parsing errors
```

#### Deployment Failures
```bash
# Verify GitHub Pages settings:
# Repository Settings → Pages → Source: GitHub Actions
```

#### Routing Issues
```bash
# Ensure .nojekyll file is created
# Check trailingSlash configuration
# Verify basePath settings for GitHub Pages
```

## 🔧 Development Integration

### Local Testing
Before pushing to main, test the build locally:

```bash
# Test the complete build process
npm run build

# Verify static export
ls -la out/

# Test locally (optional)
npx serve out/
```

### Branch Protection
- Consider adding branch protection rules for `main`
- Require status checks to pass before merging
- Require pull request reviews for production changes

## 📈 Workflow Analytics

### Deployment History
- All deployments are tracked in GitHub Actions history
- Build logs preserved for debugging
- Performance metrics available in Actions tab

### Success Metrics
- **Deployment Success Rate**: 100% (when following best practices)
- **Average Deployment Time**: 3-4 minutes total
- **Zero Downtime**: Static site deployment ensures availability

## 🔮 Future Enhancements

### Potential Improvements

#### Enhanced CI/CD
```yaml
# Additional workflow features to consider:
- Pull request previews
- Performance testing
- SEO validation
- Accessibility testing
- Content validation
```

#### Multi-Environment Support
```yaml
# Environment-specific deployments:
- Staging environment for testing
- Preview deployments for pull requests
- Production deployment with additional validations
```

#### Advanced Monitoring
```yaml
# Monitoring and alerting:
- Deployment notifications
- Performance monitoring
- Error tracking
- Uptime monitoring
```

## 🛡️ Security Considerations

### Token Security
- GitHub automatically provides secure tokens
- No manual token configuration required
- Tokens are scoped to specific permissions

### Dependency Security
- `npm ci` ensures reproducible builds
- Consider adding dependency scanning
- Regular dependency updates via Dependabot

### Content Security
- Static site generation eliminates many security vectors
- No server-side code execution
- No database or dynamic content vulnerabilities

## 📚 References and Documentation

### GitHub Actions
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Action](https://github.com/actions/deploy-pages)
- [Upload Pages Artifact](https://github.com/actions/upload-pages-artifact)

### Next.js Deployment
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Deployment](https://nextjs.org/docs/app/building-your-application/deploying#github-pages)

### Best Practices
- [GitHub Actions Best Practices](https://docs.github.com/en/actions/learn-github-actions/security-hardening-for-github-actions)
- [Static Site Security](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## 🎯 Workflow Success Criteria

A successful deployment includes:
- ✅ Clean build with no TypeScript errors
- ✅ All content files processed correctly
- ✅ Static export generated successfully
- ✅ `.nojekyll` file created
- ✅ Assets uploaded to GitHub Pages
- ✅ Site accessible at deployment URL
- ✅ All page routes working correctly
- ✅ Mobile and desktop responsiveness verified