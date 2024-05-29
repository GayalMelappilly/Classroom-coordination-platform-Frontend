"use client";

import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import "./globals.css";
import { useContext } from "react";
import { StatusContextProvider, StatusContext } from "@/context/StatusContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StatusContextProvider>
      <InnerLayout>{children}</InnerLayout>
    </StatusContextProvider>
  );
}

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(StatusContext);

  if (!context) {
    throw new Error("StatusContextProvider is missing in the component tree.");
  }

  const { status } = context;

  console.log("STATUS : ", status);
  return (
    <html lang="en">
      <body className={inter.className}>
        {status ? <NavBar /> : null}
        {children}
      </body>
    </html>
  );
};
