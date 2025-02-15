"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
}
