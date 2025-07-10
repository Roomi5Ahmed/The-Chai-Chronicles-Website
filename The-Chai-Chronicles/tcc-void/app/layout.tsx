import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Removed Header import: import Header from "./components/Header";
import RootClientLayout from "./RootClientLayout";
// Removed SessionProvider import: import { SessionProvider } from 'next-auth/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Chai Chronicles", // Updated title
  description: "A responsive, storytelling-focused frontend website for a nostalgic Indian tea brand.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {/* Removed font classes here, will use global styles */}
        {/* SessionProvider moved inside RootClientLayout */}
        {/* Header moved inside RootClientLayout */}
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}