import type { Metadata } from "next";
import "./globals.css";

// Get the basePath for GitHub Pages deployment
// For GitHub Pages subdirectory: USE_BASE_PATH=true
// For custom domains or local dev: USE_BASE_PATH=false or unset
const basePath = process.env.USE_BASE_PATH === 'true' ? '/clarkemoyer.com' : '';

export const metadata: Metadata = {
  title: "Clarke Moyer - Personal Website",
  description: "Professional Profile & Personal Journey of Clarke Moyer",
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
      <body className="font-sans">{children}</body>
    </html>
  );
}