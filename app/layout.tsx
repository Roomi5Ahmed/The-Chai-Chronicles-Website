import React from "react";
import type { Metadata } from "next";
import "./globals.css";
// Removed Header import: import Header from "./components/Header";
import RootClientLayout from "./RootClientLayout";
// Removed SessionProvider import: import { SessionProvider } from 'next-auth/react';



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