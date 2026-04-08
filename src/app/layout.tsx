import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CookieConsent from '@/components/cookie-consent';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

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
      <head>
        {/* Google Tag Manager — loads immediately; GA4 tag inside GTM fires only after consent */}
        <Script id="gtm-head" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      </head>
      <body className="font-sans">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
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
