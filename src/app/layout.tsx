import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind Prefixer Tool",
  description: "Unofficial prefixer tool for Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 dark:bg-white`} suppressHydrationWarning={true}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main>{children}</main>
      </ThemeProvider>
      </body>
    </html>
  );
}
