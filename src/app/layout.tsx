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
  title: {
    template: "%s | Nore UI",
    default: "Nore UI",
  },
  description: "A collection of UI components built with React and Panda CSS",
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
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={scroll()}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
