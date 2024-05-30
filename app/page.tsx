"use client"

import NavBar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Home() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <NavBar toggleDrawer={toggleDrawer} open={open} />
      <Sidebar toggleDrawer={toggleDrawer} open={open}/>
    </div>
  );
}
