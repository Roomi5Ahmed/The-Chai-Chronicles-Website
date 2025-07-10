"use client";

import React from 'react';
import { ContextProvider } from './ContextProvider';
import { SessionProvider } from 'next-auth/react';
import Header from './components/Header'; // Import Header

interface RootClientLayoutProps {
    children: React.ReactNode;
}

export default function RootClientLayout({
    children,
}: RootClientLayoutProps) {
    return (
        <SessionProvider>
            {/* Render Header inside SessionProvider */}
            <Header />
            <ContextProvider>
                {children}
            </ContextProvider>
        </SessionProvider>
    );
}