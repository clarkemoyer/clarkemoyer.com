# WordPress Legacy Content

This folder contains the organized content from the original WordPress website. The content has been extracted and processed to serve as the source of truth for the new Next.js application.

## Folder Structure

### `/pages/`
Contains the extracted HTML pages from the original WordPress site:
- `certification-guides/` - Professional certifications and guides
- `clarke-moyer-cissp-certification-passing-guide/` - CISSP certification guide
- `clarke-moyer-world-famous-apple-crisp-recipe/` - Famous family recipe
- `free-for-charity/` - Information about the Free For Charity nonprofit
- `fun/` - Personal interests and hobbies
- `it-project-management-resume-of-clarke-moyer/` - Professional resume
- `learn-free-charity/` - Learn more about Free For Charity
- `psu-arl-referral-program/` - PSU ARL referral information
- `western-governors-university-bs-it/` - WGU education information
- `wgu-referral-program/` - WGU referral program details
- `who-i-am/` - Personal biography and background

### `/uploads/`
Contains media files organized by year:
- `2012/` - Media from 2012 (early website content)
- `2020/` - Media from 2020
- `2021/` - Media from 2021 (includes documents and PDFs)
- `2023/` - Media from 2023

### `/extracted-content/`
Contains markdown files extracted from the WordPress HTML pages, ready for use in the Next.js application:
- `certification-guides.md`
- `clarke-moyer-cissp-certification-passing-guide.md`
- `clarke-moyer-world-famous-apple-crisp-recipe.md`
- `free-for-charity.md`
- `fun.md`
- `it-project-management-resume-of-clarke-moyer.md`
- `learn-free-charity.md`
- `psu-arl-referral-program.md`
- `western-governors-university-bs-it.md`
- `wgu-referral-program.md`
- `who-i-am.md`

### Root Files
- `original-homepage.html` - The complete WordPress homepage HTML

## Content Integration

The following content has been integrated into the main Next.js application:

✅ **Enhanced Existing Files:**
- `content/sections/about.md` - Enhanced with detailed personal background
- `content/sections/family.md` - Added specific family details and Facebook link
- `content/sections/charity.md` - Added Free For Charity nonprofit information
- `content/sections/certification.md` - Complete certification listing with dates and licenses
- `content/sections/education.md` - Added WGU education details and philosophy

✅ **New Content Files:**
- `content/sections/fun.md` - Personal interests and hobbies

## Available for Future Integration

📋 **Additional Content Available:**
- **Recipes**: Clarke Moyer's World Famous Apple Crisp Recipe
- **Professional Resume**: Detailed IT project management experience
- **Referral Programs**: WGU and PSU ARL referral information
- **Certification Guides**: Detailed guides for passing various certifications
- **Media Assets**: 230+ files including documents, images, and PDFs

## Notes

- All ZIP files have been extracted and organized
- Original WordPress structure has been preserved in the pages/ directory
- Content has been converted from HTML to Markdown for Next.js compatibility
- Media files are organized by year for easy reference
- No content has been lost - everything is preserved in this legacy structure