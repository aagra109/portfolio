import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { spaceGrotesk } from "@/lib/fonts";
import { seoConfig } from "@/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: seoConfig.title,
  description: seoConfig.description,
  applicationName: seoConfig.siteName,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: seoConfig.authorName, url: seoConfig.siteUrl }],
  creator: seoConfig.authorName,
  publisher: seoConfig.authorName,
  keywords: seoConfig.keywords,
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.siteUrl,
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: seoConfig.siteName,
  },
  twitter: {
    card: "summary",
    title: seoConfig.title,
    description: seoConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
