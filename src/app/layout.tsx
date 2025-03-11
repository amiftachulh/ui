import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { scroll } from "styled-system/recipes";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
