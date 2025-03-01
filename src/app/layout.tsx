import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./header";
import "./globals.css";
import { css } from "styled-system/css";
import { scroll } from "styled-system/recipes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI",
  description: "Composable UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={scroll()}>
        <ThemeProvider>
          <Header />
          <div className={css({ maxW: "breakpoint-2xl", mx: "auto", mt: "14" })}>{children}</div>
          <Toaster />
          <Sonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
