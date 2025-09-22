# Copilot Instructions for clarkemoyer.com

## Repository Overview

This is a **personal website** built with Next.js 15.1.6, migrated from WordPress to provide better performance and maintainability. The site is a static site generator (SSG) that deploys to GitHub Pages at https://clarkemoyer.github.io/clarkemoyer.com.

**Repository Type:** Next.js static site with TypeScript  
**Size:** Small (~306 files, mainly content and assets)  
**Languages/Frameworks:** TypeScript, React, Next.js, Tailwind CSS  
**Target Runtime:** Static HTML/CSS/JS (GitHub Pages)  
**Content:** Personal/professional portfolio with Markdown-based content management

## Build and Development Commands

### Prerequisites
- **Node.js 20 or later** (tested with v20.19.5)
- **npm** (comes with Node.js, tested with v10.8.2)

**Security Note:** The project has known security vulnerabilities in Next.js dependencies. Run `npm audit` to see current status. These are development dependencies and don't affect the static output.

### Essential Commands

**ALWAYS run these commands in this exact order:**

1. **Install dependencies:** `npm ci` (NEVER use `npm install` for production builds)
2. **Lint code:** `npm run lint` (must pass before any commits)
3. **Build site:** `npm run build` (creates `out/` directory with static files)
4. **Validate images:** `npm run test:images:github` (ensures proper GitHub Pages paths)

### Development Workflow
```bash
# Start development server (runs on localhost:3000 or next available port)
npm run dev

# Build and test complete workflow
npm run build && npm run test:images:github
```

### Command Details
- **`npm run dev`**: Development server with hot reload, takes ~1-2 seconds to start
- **`npm run build`**: Production build, takes ~10-15 seconds, outputs to `out/`
- **`npm run start`**: Production server (rarely needed, for testing build locally)
- **`npm run lint`**: ESLint validation, must pass with zero errors
- **`npm run test:images`**: Validate image paths for local development
- **`npm run test:images:github`**: Validate image paths for GitHub Pages (required for deployment)

### Critical Build Requirements
- **Always use `npm ci`** instead of `npm install` to ensure reproducible builds
- **Always run image validation** after build changes that affect images
- **Clean builds work reliably** - no special environment setup needed

## Project Architecture

### Directory Structure
```
clarkemoyer.com/
├── .github/workflows/     # GitHub Actions (deploy.yml, nextjs.yml)
├── content/sections/      # Markdown content files (9 pages)
├── src/app/              # Next.js App Router pages and layouts
├── src/components/       # Reusable React components (3 components)
├── src/lib/              # Utilities (content.ts for Markdown processing)
├── public/               # Static assets (images, wp-content)
├── tests/                # Custom validation scripts
└── out/                  # Build output (created by `npm run build`)
```

### Key Configuration Files
- **`next.config.js`**: GitHub Pages basePath configuration
- **`package.json`**: Dependencies and scripts
- **`tsconfig.json`**: TypeScript configuration with path aliases
- **`tailwind.config.js`**: Styling configuration
- **`.eslintrc.json`**: Code quality rules (extends next/core-web-vitals)

### Content Management System
- **Content location:** `content/sections/*.md`
- **Content format:** Markdown with YAML frontmatter
- **Content processing:** `getContentFile()` utility in `src/lib/content.ts`
- **Supported files:** about.md, certification.md, charity.md, education.md, family.md, fun.md, psu-arl-referral.md, resume.md, wgu-referral.md

### Component Architecture
1. **`src/app/layout.tsx`**: Root layout with metadata and global styles
2. **`src/components/Navigation.tsx`**: Site navigation component
3. **`src/components/ContentSection.tsx`**: Content wrapper component
4. **`src/components/CTAButtons.tsx`**: Call-to-action buttons (LinkedIn, contact)

### GitHub Pages Deployment Architecture
**Critical:** This site uses a complex basePath system for GitHub Pages deployment.

- **Local development:** Images use paths like `/images/photo.jpg`
- **GitHub Pages:** Images must use paths like `/clarkemoyer.com/images/photo.jpg`
- **Implementation:** `const basePath = process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '';`
- **Validation:** Custom test suite validates all image paths before deployment

## GitHub Actions Workflows

### Primary Deployment Pipeline (.github/workflows/deploy.yml)
1. **Trigger:** Every push to `main` branch
2. **Steps:**
   - Checkout code
   - Setup Node.js 20 with npm cache
   - Run `npm ci`
   - Run `npm run build` (with GITHUB_ACTIONS=true)
   - Add `.nojekyll` file
   - Deploy to GitHub Pages

### Secondary Pipeline (.github/workflows/nextjs.yml)
- More comprehensive Next.js workflow with caching
- Includes image validation step
- Both workflows run on main branch pushes

### Manual Deployment
```bash
npm run build  # Creates out/ directory
# Deploy out/ directory to any static hosting service
```

## Critical Development Guidelines

### Image Path Handling (VERY IMPORTANT)
**All image references must use the basePath pattern:**
```tsx
// ✅ CORRECT
const basePath = process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '';
<img src={`${basePath}/images/photo.jpg`} />

// ❌ WRONG (breaks on GitHub Pages)
<img src="/images/photo.jpg" />
```

### Content Updates
1. **Edit Markdown files** in `content/sections/`
2. **Test locally** with `npm run dev`
3. **Build and validate** with `npm run build && npm run test:images:github`
4. **Commit and push** - deployment is automatic

### TypeScript Requirements
- All components must have proper TypeScript typing
- Use interfaces for component props
- Content fetching must handle null returns gracefully

### Styling Guidelines
- **Use Tailwind CSS utilities** (no custom CSS files except globals.css)
- **Responsive design:** Mobile-first approach
- **Typography:** Use prose classes for content areas

## Common Issues and Solutions

### Build Issues
- **"Cannot find module"**: Run `npm ci` to ensure all dependencies are installed
- **TypeScript errors**: Check `tsconfig.json` paths and ensure all imports use correct aliases
- **Image validation failures**: Ensure all images use basePath pattern
- **Security warnings**: `npm audit` will show vulnerabilities in Next.js dependencies (safe to ignore for static output)

### Development Server Issues
- **Port 3000 in use**: Next.js automatically tries 3001, 3002, etc.
- **Hot reload not working**: Restart dev server with `npm run dev`

### Deployment Issues
- **Broken images on GitHub Pages**: Run `npm run test:images:github` to validate paths
- **404 on GitHub Pages**: Ensure `.nojekyll` file exists in output

## Testing Strategy

### Image Path Validation
**Critical testing:** The repository includes comprehensive image path validation.
- **Local testing:** `npm run test:images`
- **GitHub Pages testing:** `npm run test:images:github`
- **What it validates:** All img src and CSS background-image URLs
- **Failure behavior:** Build fails if any image paths are incorrect

### Manual Testing Steps
1. Build site: `npm run build`
2. Validate images: `npm run test:images:github`
3. Check for TypeScript errors: `npm run lint`
4. Test content loading: `npm run dev` and visit each page

## Performance Characteristics

### Performance Characteristics

### Build Times
- **Development server start:** ~1.3 seconds
- **Production build:** ~10-15 seconds
- **Dependency installation:** ~8-20 seconds (with cache warnings)
- **Linting:** ~2-3 seconds
- **Image validation:** ~1-2 seconds

### Output Characteristics
- **Static site:** All pages pre-rendered as HTML
- **Bundle sizes:** ~105-115KB first load JS per page
- **Image optimization:** Uses Next.js Image component with unoptimized flag for static export

## Key Dependencies
- **Next.js 15.1.6:** Static site framework
- **React 19.0.0:** UI library
- **TypeScript 5.x:** Type safety
- **Tailwind CSS 3.4.1:** Styling
- **gray-matter 4.0.3:** Markdown frontmatter parsing
- **marked 16.3.0:** Markdown to HTML conversion

## Files to Ignore
**Never commit these directories/files** (handled by .gitignore):
- `node_modules/` - Dependencies
- `out/` - Build output
- `.next/` - Next.js cache
- `*.tsbuildinfo` - TypeScript build cache

## Trust These Instructions

**These instructions are comprehensive and tested.** Only search for additional information if:
1. You encounter specific error messages not covered here
2. You need to implement features not described in this guide
3. The provided commands fail in unexpected ways

**Always start with the documented commands and patterns before exploring alternatives.**