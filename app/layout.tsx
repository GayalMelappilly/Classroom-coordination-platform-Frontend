"use client";

import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import "./globals.css";
import React, { useContext } from "react";
import { StatusContextProvider, StatusContext } from "@/context/StatusContext";
import Sidebar from "@/components/Sidebar";

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
  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  if (!context) {
    throw new Error("StatusContextProvider is missing in the component tree.");
  }

  const { status } = context;

  console.log("STATUS : ", status);
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200`}>
        {status ? <NavBar toggleDrawer={toggleDrawer} open={open} /> : null}
        {status ? <Sidebar toggleDrawer={toggleDrawer} open={open} /> : null}
        {children}
      </body>
    </html>
  );
};
