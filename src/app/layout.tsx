import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clarke Moyer - Personal Website",
  description: "Professional Profile & Personal Journey of Clarke Moyer",
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