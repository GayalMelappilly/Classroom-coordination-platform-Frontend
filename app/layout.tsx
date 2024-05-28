"use client"

import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import "./globals.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoggedIn ? <NavBar /> : null}
        {children}
      </body>
    </html>
  );
}
