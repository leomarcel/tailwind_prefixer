import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

const siteUrl = "https://tailwind-prefixer.vercel.app";
const siteName = "Tailwind Prefixer";
const siteDescription =
  "Add custom prefixes to your Tailwind CSS classes instantly. The fastest way to namespace Tailwind utilities for any framework — React, Vue, Angular, Svelte, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tailwind Prefixer — Add Custom Prefixes to Tailwind CSS Classes",
    template: "%s | Tailwind Prefixer",
  },
  description: siteDescription,
  keywords: [
    "tailwind css",
    "tailwind prefix",
    "tailwind prefixer",
    "tailwind css prefix",
    "tailwind custom prefix",
    "tailwind namespace",
    "css prefix tool",
    "tailwind utility prefix",
    "tailwind class prefix",
    "tailwindcss prefix tool",
    "tailwind css rename classes",
    "tailwind className prefix",
    "tailwind css tools",
    "css utility prefix",
    "tailwind migration tool",
    "tailwind css namespace",
    "tw prefix",
    "react tailwind prefix",
    "vue tailwind prefix",
    "angular tailwind prefix",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Tailwind Prefixer — Add Custom Prefixes to Tailwind CSS Classes",
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tailwind Prefixer - Add custom prefixes to Tailwind CSS classes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind Prefixer — Add Custom Prefixes to Tailwind CSS Classes",
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Add custom prefixes to Tailwind CSS classes",
    "Support for HTML class and React className attributes",
    "Real-time transformation preview",
    "Copy to clipboard",
    "Framework agnostic — works with React, Vue, Angular, Svelte",
    "Dark mode support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
