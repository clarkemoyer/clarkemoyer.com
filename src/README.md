# Source Code Architecture

This directory contains the Next.js application source code for the clarkemoyer.com website.

## 📁 Directory Structure

```
src/
├── app/                 # Next.js App Router pages and layouts
│   ├── globals.css      # Global styles and Tailwind CSS imports
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Homepage component
│   ├── certification/   # Certification page
│   ├── charity/         # Charity/nonprofit page
│   ├── education/       # Education page
│   ├── family/          # Family page
│   ├── fun/             # Personal interests page
│   ├── psu-arl-referral/ # PSU ARL referral page
│   ├── resume/          # Resume/professional page
│   └── wgu-referral/    # WGU referral page
├── components/          # Reusable React components
│   ├── CTAButtons.tsx   # Call-to-action button components
│   ├── ContentSection.tsx # Content section wrapper component
│   └── Navigation.tsx   # Site navigation component
└── lib/                 # Utility functions and business logic
    └── content.ts       # Content management and Markdown processing
```

## 🏗️ Architecture Patterns

### App Router (Next.js 13+)

The application uses Next.js App Router for:
- File-based routing system
- Layout nesting and shared components
- Static site generation with `output: 'export'`
- TypeScript integration

### Component Architecture

#### Layout Components
- **`layout.tsx`**: Root layout with metadata and global styles
- **`Navigation.tsx`**: Consistent navigation across all pages

#### Content Components
- **`ContentSection.tsx`**: Reusable section wrapper for content display
- **`CTAButtons.tsx`**: Call-to-action buttons for LinkedIn and contact

#### Page Components
- Each page in `app/` follows a consistent pattern:
  - Import navigation and content utilities
  - Fetch content from Markdown files
  - Render with consistent layout and styling

### Content Management System

The `lib/content.ts` module provides:

```typescript
interface ContentData {
  title?: string;
  content: string;
  [key: string]: any;
}

async function getContentFile(fileName: string): Promise<ContentData | null>
```

**Features:**
- Markdown file parsing with Gray Matter frontmatter
- HTML conversion using Marked.js
- Error handling for missing content files
- Type-safe content interface

## 🎨 Styling Architecture

### Tailwind CSS

The project uses Tailwind CSS for styling:
- **Utility-first**: Classes like `text-3xl`, `font-bold`, `bg-gray-50`
- **Responsive**: Mobile-first responsive design with `sm:`, `lg:` prefixes
- **Custom palette**: Consistent color scheme throughout
- **Typography**: Prose classes for readable content

### Global Styles

`app/globals.css` contains:
- Tailwind CSS imports
- Custom CSS variables
- Global font loading (Inter)

## 📄 Page Architecture

### Static Generation

All pages are statically generated:
- Content is fetched at build time
- No runtime server required
- Optimal performance for GitHub Pages

### Page Pattern

Each page follows this pattern:

```typescript
export default async function PageName() {
  const content = await getContentFile('page-name');
  
  return (
    <>
      <Navigation />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold">{title}</h1>
          {content && (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          )}
          <CTAButtons />
        </div>
      </main>
    </>
  );
}
```

### Homepage (`page.tsx`)

The homepage is unique:
- Custom hero section with personal branding
- Multiple content sections
- Embedded call-to-action areas
- WGU referral section with custom styling

## 🔧 Development Guidelines

### Component Development

1. **Use TypeScript**: All components should have proper typing
2. **Props Interface**: Define interfaces for component props
3. **Async/Await**: Use async components for data fetching
4. **Error Handling**: Handle missing content gracefully
5. **Responsive Design**: Use Tailwind responsive utilities

### Content Integration

1. **Markdown Files**: Place content in `content/sections/`
2. **Frontmatter**: Use YAML frontmatter for metadata
3. **File Naming**: Match filename to page route (kebab-case)
4. **Content Fetching**: Use `getContentFile()` utility

### Styling Guidelines

1. **Tailwind First**: Use Tailwind utilities over custom CSS
2. **Consistent Spacing**: Use standardized spacing scale
3. **Typography**: Use prose classes for content areas
4. **Color Scheme**: Stick to defined color palette
5. **Mobile First**: Design for mobile, enhance for desktop

## 🚀 Performance Optimizations

### Static Generation
- All pages pre-rendered at build time
- No JavaScript required for content display
- Optimal Core Web Vitals scores

### Image Optimization
- Unoptimized images for static hosting compatibility
- Responsive image sizing with CSS
- Lazy loading where appropriate

### Bundle Optimization
- Tree shaking eliminates unused code
- Component-level code splitting
- Minimal JavaScript payload

## 🧪 Testing Strategy

### Development Testing
- `npm run dev` for hot reload development
- `npm run build` to test production build
- `npm run lint` for code quality

### Content Testing
- Verify all pages render without errors
- Check content loading from Markdown files
- Validate responsive design across devices

## 📚 Key Dependencies

- **Next.js 15**: React framework with App Router
- **React 19**: Component library
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first styling
- **Gray Matter**: Frontmatter parsing
- **Marked**: Markdown to HTML conversion

## 🔮 Future Enhancements

Potential improvements to consider:
- Content validation schema
- Automated content testing
- Component library expansion
- Performance monitoring
- SEO optimization tools