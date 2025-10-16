// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from './components/Navbar';
import Footer from './components/Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zaynab's Portfolio", 
  description: "A portfolio showcasing my software engineering projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className="scroll-smooth">
      
      <body className={inter.className}>
        {/* 2. Add the Navbar here, above the children */}
        <Navbar />
       
        {children}
         <Footer />
      </body>
    </html>
  );
}