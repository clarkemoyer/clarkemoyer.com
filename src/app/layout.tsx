import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from '@/components/cookie-consent';

// Get the basePath for GitHub Pages deployment
// For GitHub Pages subdirectory: USE_BASE_PATH=true
// For custom domains or local dev: USE_BASE_PATH=false or unset
const basePath = process.env.USE_BASE_PATH === 'true' ? '/clarkemoyer.com' : '';

export const metadata: Metadata = {
  title: {
    default: "Clarke Moyer",
    template: "%s | Clarke Moyer",
  },
  description: "Professional Profile & Personal Journey of Clarke Moyer",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clarkemoyer.com'),
  icons: {
    icon: `${basePath}/images/favicon-32x32.jpg`,
    apple: `${basePath}/images/favicon-192x192.jpg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div id="main-content" tabIndex={-1}>{children}</div>
        <CookieConsent />
      </body>
    </html>
  );
}