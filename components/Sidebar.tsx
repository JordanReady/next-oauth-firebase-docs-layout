// Import necessary libraries and components
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CornerDownRight, Menu, X } from "lucide-react";
import Reveal from "./Reveal";
import { act } from "react-dom/test-utils";

// Sidebar component
const Sidebar = () => {
  // State variables to track the active link, active sub-link, and sidebar status
  const [activeLink, setActiveLink] = useState("");
  const [activeSubLink, setActiveSubLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to determine the class name for a main link based on its active status
  const getLinkClassName = (path: string) => {
    const baseClassName =
      "group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:translate-x-1 duration-100";

    return activeLink === path
      ? `${baseClassName} group text-primary translate-x-1`
      : baseClassName;
  };

  // Function to determine the class name for a sub-link based on its active status
  const getSubLinkClassName = (path: string) => {
    const baseClassName =
      "group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:translate-x-1 duration-100";

    // Get the concatenated sub-link by joining the last two path segments
    const subLink = window.location.pathname.split("/").slice(-2).join("/");

    return subLink === path
      ? `${baseClassName} group text-primary translate-x-1`
      : baseClassName;
  };

  // useEffect hook to set initial active links and handle route changes
  useEffect(() => {
    // Extract the sub-path from the last two segments of the path
    const [, subPath] = window.location.pathname.split("/").slice(-2);
    // Set initial active links
    setActiveLink(window.location.pathname.split("/").pop() || "");
    setActiveSubLink(subPath || "");

    // Function to handle route changes
    const handleRouteChange = () => {
      // Extract the sub-path from the last two segments of the path
      const [, subPath] = window.location.pathname.split("/").slice(-2);
      // Update active links on route change
      setActiveLink(window.location.pathname.split("/").pop() || "");
      setActiveSubLink(subPath || "");
    };

    // Attach event listener for popstate (route change)
    window.addEventListener("popstate", handleRouteChange);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // Function to toggle the sidebar's visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // JSX for the Sidebar component
  return (
    <>
      {/* Button to toggle the sidebar on mobile */}
      <button
        onClick={toggleSidebar}
        className={`md:hidden ml-2 mt-[-3.85rem] z-[999] p-2 bg-white text-black border-2 border-blue-500 fixed `}
      >
        {isSidebarOpen ? <Menu /> : <X />}
      </button>
      {/* Sidebar container */}
      <div
        className={`w-[200px] min-w-[200px] max-w-[200px] md:w-1/6 p-2 flex flex-col md:mt-[1.5rem]  ${
          isSidebarOpen
            ? "hidden md:inline-flex "
            : "fixed border-2 h-[100dvh] z-[999] border-blue-500 border-t-0 border-l-0 md:flex-block md:border-0  bg-white"
        }`}
      >
        {/* Section: Getting Started */}
        <h1 className="text-primary font-semibold">Getting Started</h1>
        <Link className={getLinkClassName("rooty")} href="/docs/rooty">
          Rooty
        </Link>
        <Link className={getLinkClassName("tooty")} href="/docs/tooty">
          Tooty
        </Link>
        <Link className={getLinkClassName("booty")} href="/docs/booty">
          Booty
        </Link>
        <Link className={getLinkClassName("scooty")} href="/docs/scooty">
          Scooty
        </Link>

        {/* Section: Adding Sublinks */}
        <h1 className="text-primary font-semibold">Adding Sublinks</h1>
        <Link className={getLinkClassName("main")} href="/docs/main">
          Main Link
        </Link>

        <Link
          className={` group flex ${getSubLinkClassName("main/sub")}`}
          href="/docs/main/sub"
        >
          <CornerDownRight
            className=" group-hover:text-purple-600 "
            size={20}
            strokeWidth={1}
          />
          Sub Link
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
