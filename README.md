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

- Node.js 20 or later (22.16+ recommended for Canva AI Connector)
- npm (comes with Node.js)
- (Optional) Canva account for AI Connector integration - see [.vscode/README.md](.vscode/README.md)

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
- **URL**: https://staging.clarkemoyer.com (Custom Domain)

### GitHub Pages Setup

To enable GitHub Pages deployment:

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Under **Custom domain**, enter `staging.clarkemoyer.com`
4. The deployment workflow will run automatically on the next push

### Custom Domain Deployment

⚠️ **Important**: GitHub Pages only allows ONE custom domain per repository. This repository is currently configured for:
- **Custom Domain**: `staging.clarkemoyer.com`
- **Build Mode**: WITHOUT `USE_BASE_PATH` (assets load from root path)

#### Current Configuration
The site is deployed to `https://staging.clarkemoyer.com`:
- Build **without** `USE_BASE_PATH` environment variable
- All assets load from the root path (e.g., `/images/photo.jpg`)
- CNAME file in `public` directory contains `staging.clarkemoyer.com`
- Configured automatically in `.github/workflows/deploy.yml`

#### Alternative: GitHub Pages Subdirectory Mode
If you need to deploy to `https://clarkemoyer.github.io/clarkemoyer.com/` instead:
1. Remove the custom domain from GitHub Pages settings
2. Delete `public/CNAME` file
3. Update workflows to build with `USE_BASE_PATH=true`
4. All assets will include the `/clarkemoyer.com` basePath

```bash
# Build for custom domain (current configuration)
npm run build

# Build for GitHub Pages subdirectory (alternative)
USE_BASE_PATH=true npm run build
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

## 🎨 Canva AI Connector Integration

This project includes support for the Canva AI Connector, which allows your AI assistant to seamlessly interact with Canva's design capabilities using the Model Context Protocol (MCP).

### Before You Start

To use the Canva AI Connector, you'll need:
- Node.js 22.16 or later with npm (install from https://nodejs.org/en/download)
- An AI assistant that supports MCP servers (such as GitHub Copilot in VS Code)
- A Canva account with any Canva plan

**Note:** Some features require a paid Canva plan (Canva Pro or Enterprise). For example, autofill tools may only be available on Enterprise, while exporting designs is included in all plans.

### Setup

The Canva AI Connector is pre-configured in `.vscode/mcp.json` and requires **no API credentials**. The configuration will automatically:
1. Download the MCP remote server when first accessed
2. Connect to Canva's hosted MCP server at `https://mcp.canva.com/mcp`
3. Enable your AI assistant (GitHub Copilot) to interact with Canva

Simply open VS Code and use GitHub Copilot Chat in **Agent mode** to start using Canva capabilities.

For detailed setup instructions, see [.vscode/README.md](.vscode/README.md).

### Capabilities

With the Canva AI Connector, you can:
- Create new empty designs in Canva
- Autofill templates with your content
- Find your existing designs
- Export designs as PDFs or images

For more information, visit the [Canva AI Connector Documentation](https://www.canva.dev/docs/connect/canva-mcp-server-setup/).

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
