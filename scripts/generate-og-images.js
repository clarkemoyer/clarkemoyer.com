#!/usr/bin/env node
/**
 * Generate Open Graph images for clarkemoyer.com
 * Uses sharp (already a dependency) to rasterize SVG → PNG
 * Output: public/og/*.png (1200x630)
 */
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'og');
mkdirSync(outDir, { recursive: true });

const W = 1200;
const H = 630;

function svgToPng(svgStr, filename) {
  return sharp(Buffer.from(svgStr))
    .resize(W, H)
    .png()
    .toFile(join(outDir, filename))
    .then(() => console.log(`✓ ${filename}`));
}

/* ── shared helpers ── */
function badge(text, x, y) {
  return `
    <rect x="${x}" y="${y}" width="${text.length * 14 + 40}" height="44" rx="10"
      fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
    <text x="${x + 20 + (text.length * 14) / 2}" y="${y + 28}" text-anchor="middle"
      font-family="system-ui, sans-serif" font-size="20" fill="white">${text}</text>`;
}

/* ── 1. default.png ── */
const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#1f2937"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- subtle accent line -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#3b82f6"/>
  <!-- site label -->
  <text x="${W/2}" y="200" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="22" letter-spacing="6" fill="#9ca3af">CLARKEMOYER.COM</text>
  <!-- name -->
  <text x="${W/2}" y="310" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="80" font-weight="700" fill="white">Clarke Moyer</text>
  <!-- tagline -->
  <text x="${W/2}" y="375" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="30" fill="#d1d5db">Technology Consultant &amp; Researcher</text>
  <!-- badges -->
  ${badge('Walk &amp; Talk Consulting', 240, 430)}
  ${badge('DoD Contractor · CISSP', 640, 430)}
  <!-- bottom bar -->
  <text x="${W/2}" y="585" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="18" fill="#6b7280">clarkemoyer.com</text>
</svg>`;

/* ── 2. walk-and-talk.png ── */
const walkTalkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e3a5f"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#22d3ee"/>
  <!-- category -->
  <text x="${W/2}" y="170" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="22" letter-spacing="6" fill="#67e8f9">CONSULTING</text>
  <!-- main heading -->
  <text x="${W/2}" y="280" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="72" font-weight="700" fill="white">Walk and Talk</text>
  <!-- sub -->
  <text x="${W/2}" y="345" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="30" fill="#bae6fd">with Clarke Moyer</text>
  <!-- description -->
  <text x="${W/2}" y="405" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="22" fill="#94a3b8">No laptops. No slides. Just focused conversation on a walk.</text>
  <!-- price badge -->
  <rect x="390" y="435" width="420" height="60" rx="12"
    fill="rgba(34,211,238,0.15)" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="${W/2}" y="474" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="26" font-weight="600" fill="white">$750/hr · 4-Hour Minimum · Book Now</text>
  <text x="${W/2}" y="578" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="18" fill="#6b7280">clarkemoyer.com/walk-and-talk</text>
</svg>`;

/* ── 3. certifications.png ── */
const certSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f1d0f"/>
      <stop offset="100%" stop-color="#1a3a1a"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#4ade80"/>
  <text x="${W/2}" y="170" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="22" letter-spacing="6" fill="#86efac">CERTIFICATION GUIDES</text>
  <text x="${W/2}" y="280" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="72" font-weight="700" fill="white">Clarke Moyer</text>
  <text x="${W/2}" y="345" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="30" fill="#bbf7d0">Passing Guides &amp; Study Tips</text>
  <text x="${W/2}" y="400" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="22" fill="#94a3b8">Real-world experience from a CISSP, PMP, VCP &amp; more</text>
  ${badge('CISSP', 160, 435)}
  ${badge('PMP', 348, 435)}
  ${badge('VCP', 490, 435)}
  ${badge('SAFe SPC', 617, 435)}
  ${badge('MCP', 800, 435)}
  ${badge('CRT', 905, 435)}
  <text x="${W/2}" y="578" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="18" fill="#6b7280">clarkemoyer.com/certification-guides</text>
</svg>`;

/* ── 4. cooking.png ── */
const cookingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2d1505"/>
      <stop offset="100%" stop-color="#451a03"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#fb923c"/>
  <text x="${W/2}" y="170" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="22" letter-spacing="6" fill="#fed7aa">RECIPES &amp; COOKING</text>
  <text x="${W/2}" y="290" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="72" font-weight="700" fill="white">Clarke Moyer</text>
  <text x="${W/2}" y="355" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="30" fill="#fdba74">In the Kitchen</text>
  <text x="${W/2}" y="410" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="22" fill="#94a3b8">Sweet tea, apple crisp, Philly cheesesteak &amp; more</text>
  ${badge('Sweet Tea', 200, 440)}
  ${badge('Apple Crisp', 418, 440)}
  ${badge('Philly Cheesesteak', 640, 440)}
  <text x="${W/2}" y="578" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="18" fill="#6b7280">clarkemoyer.com/cooking</text>
</svg>`;

await Promise.all([
  svgToPng(defaultSvg, 'default.png'),
  svgToPng(walkTalkSvg, 'walk-and-talk.png'),
  svgToPng(certSvg, 'certifications.png'),
  svgToPng(cookingSvg, 'cooking.png'),
]);

console.log('Done — OG images written to public/og/');
