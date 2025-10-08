# clarkemoyer.com

A modern personal website built with Next.js, migrated from WordPress to provide better performance, maintainability, and developer experience.

## 🚀 Project Overview

This repository contains the complete refactoring of Clarke Moyer's personal website from WordPress to Next.js. The project demonstrates a successful migration strategy that preserves all original content while modernizing the technology stack for better performance and maintenance.

### Technology Stack

- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS
- **Language**: TypeScript  
- **Content**: Markdown with Gray Matter frontmatter
- **Deployment**: Static site generation to GitHub Pages
- **CI/CD**: GitHub Actions

### Migration Approach

The migration from WordPress to Next.js followed a systematic approach:

1. **Content Extraction**: All WordPress content was extracted and preserved in `content/wordpress-legacy/`
2. **Content Conversion**: HTML content was converted to Markdown for better maintainability
3. **Architecture Modernization**: Rebuilt using modern React patterns and TypeScript
4. **Static Generation**: Configured for optimal performance with static site generation
5. **Deployment Automation**: Set up automated deployment to GitHub Pages
6. **Visual Enhancement**: Added professional images and improved responsive design

## 📂 Project Structure

```
clarkemoyer.com/
├── .github/              # GitHub Actions workflows and configurations
├── content/              # Content management system
│   ├── sections/         # Current site content in Markdown
│   └── wordpress-legacy/ # Preserved WordPress content and migration artifacts
├── public/               # Static assets
├── src/                  # Next.js application source code
│   ├── app/              # App Router pages and layouts
│   ├── components/       # Reusable React components
│   └── lib/              # Utility functions and content management
├── package.json          # Project dependencies and scripts
├── next.config.js        # Next.js configuration for static export
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🛠️ Local Development

### Prerequisites

- Node.js 20 or later
- npm (comes with Node.js)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/clarkemoyer/clarkemoyer.com.git
cd clarkemoyer.com

# Install dependencies
npm ci

# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production and export static files
npm run start    # Start production server (for testing build locally)
npm run lint     # Run ESLint for code quality checks
npm run test:images  # Validate image paths for local development
npm run test:images:github  # Validate image paths for GitHub Pages deployment
```

## 🚀 Deployment

### Automatic Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions:

- **Trigger**: Every push to the `main` branch
- **Process**: Build → Static Export → Deploy to GitHub Pages
- **URL**: https://clarkemoyer.github.io/clarkemoyer.com

### GitHub Pages Setup

To enable GitHub Pages deployment:

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The deployment workflow will run automatically on the next push

### Custom Domain Deployment

The site supports two deployment modes:

#### GitHub Pages Subdirectory Mode
For deployment at `https://clarkemoyer.github.io/clarkemoyer.com/`:
- Build with `USE_BASE_PATH=true`
- All assets will include the `/clarkemoyer.com` basePath
- This is configured automatically in `.github/workflows/deploy.yml`

#### Custom Domain Mode
For deployment at custom domains like `https://staging.clarkemoyer.com`:
- Build **without** setting `USE_BASE_PATH` (or set it to `false`)
- All assets will load from the root path
- Configure your domain in GitHub Pages settings
- Add a `CNAME` file to the `public` directory with your domain

```bash
# Build for GitHub Pages subdirectory
USE_BASE_PATH=true npm run build

# Build for custom domain
npm run build
```

### Manual Deployment

For manual deployment or testing:

```bash
# Build the static site
npm run build

# The static files will be in the `out` directory
# These can be deployed to any static hosting service
```

## 🧪 Testing

### Image Path Validation

The project includes automated testing to ensure all images load correctly on GitHub Pages:

```bash
# Test image paths for GitHub Pages deployment
npm run test:images:github

# Test image paths for local development
npm run test:images
```

The image validation test is automatically run in the CI/CD pipeline to prevent broken images from reaching the live site. See [docs/IMAGE_TESTING.md](docs/IMAGE_TESTING.md) for detailed information.

### Development Testing
- `npm run dev` for hot reload development
- `npm run build` to test production build
- `npm run lint` for code quality

## 📋 Content Management

Content is managed through Markdown files in the `content/sections/` directory:

- Each page has a corresponding `.md` file (e.g., `about.md`, `resume.md`)
- Content supports frontmatter for metadata
- Markdown is processed and converted to HTML at build time
- Legacy WordPress content is preserved in `content/wordpress-legacy/`

## 🔧 Configuration

### Next.js Configuration

The project is configured for static site generation with flexible deployment options:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',        // Enable static export
  trailingSlash: true,     // Required for GitHub Pages
  images: { unoptimized: true }, // Optimize for static hosting
  // Deployment mode controlled by USE_BASE_PATH environment variable:
  // - USE_BASE_PATH=true: GitHub Pages subdirectory (clarkemoyer.github.io/clarkemoyer.com)
  // - USE_BASE_PATH unset/false: Custom domain (staging.clarkemoyer.com, clarkemoyer.com)
  basePath: process.env.USE_BASE_PATH === 'true' ? '/clarkemoyer.com' : '',
  assetPrefix: process.env.USE_BASE_PATH === 'true' ? '/clarkemoyer.com' : '',
};
```

**Key Features**:
- **Dual Deployment Mode**: Supports both GitHub Pages subdirectory and custom domain deployments
- **Environment-Based Configuration**: Use `USE_BASE_PATH` to control asset path handling
- **GitHub Pages Compatible**: Proper basePath handling for subdirectory deployments
- **Custom Domain Ready**: Assets load from root when deployed to custom domains

### Tailwind CSS

Tailwind CSS is configured for optimal performance:
- Purging unused styles in production
- Custom color scheme and typography
- Responsive design utilities

## 🔍 Migration Documentation

The migration from WordPress to Next.js involved several key steps:

### 1. Content Extraction
- Complete WordPress site backup and content extraction
- Preservation of all pages, media, and metadata
- Organization of content by type and date

### 2. Content Conversion
- HTML to Markdown conversion for better maintainability
- Frontmatter addition for metadata management
- Media file organization and optimization

### 3. Architecture Design
- Modern React component architecture
- TypeScript for type safety
- Tailwind CSS for consistent styling
- Static site generation for performance

### 4. Feature Parity and Enhancement
- All original WordPress functionality preserved
- Enhanced navigation and user experience
- Mobile-responsive design with professional imagery
- SEO optimization
- Improved visual design with professional photos and branding

### 5. Recent Enhancements (Post-Migration)
- Professional image integration throughout the site
- Improved GitHub Pages deployment configuration  
- Enhanced responsive design and visual consistency
- Professional branding elements and photography

For detailed migration documentation, see [`content/wordpress-legacy/README.md`](content/wordpress-legacy/README.md).

## 🤝 Contributing

This is a personal website project. For suggestions or bug reports, please open an issue.

## 📄 License

This project is licensed under the AGPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Clarke Moyer**
- LinkedIn: [@clarkemoyer](https://linkedin.com/in/clarkemoyer)
- Website: [clarkemoyer.com](https://clarkemoyer.github.io/clarkemoyer.com)
