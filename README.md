# clarkemoyer.com

Repository for the refactoring of the Clarke Moyer Personal Pages

This is a Next.js application configured for static site generation and deployment to GitHub Pages.

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment happens automatically when changes are pushed to the `main` branch.

### Setup Required

To enable GitHub Pages deployment for this repository:

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment workflow will automatically run on the next push to main

### Local Development

```bash
# Install dependencies
npm ci

# Run development server
npm run dev

# Build for production
npm run build

# The static files will be generated in the `out` directory
```

### Deployment Process

The deployment uses a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Checks out the code
2. Sets up Node.js 20
3. Installs dependencies
4. Builds the Next.js application with static export
5. Creates the `.nojekyll` file for GitHub Pages compatibility
6. Deploys the static files to GitHub Pages

The site will be available at `https://<username>.github.io/<repository-name>` (or your custom domain if configured).
