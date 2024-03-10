"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CornerDownRight, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [activeSubLink, setActiveSubLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getLinkClassName = (path: string) => {
    const baseClassName =
      "group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:translate-x-1 duration-100";
    return activeLink === path
      ? `${baseClassName} group text-primary translate-x-1`
      : baseClassName;
  };

  const getSubLinkClassName = (path: string) => {
    const baseClassName =
      "group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:translate-x-1 duration-100";

    const subLink = window.location.pathname.split("/").slice(-2).join("/");

    return subLink === path
      ? `${baseClassName} group text-primary translate-x-1`
      : baseClassName;
  };

  useEffect(() => {
    const [, subPath] = window.location.pathname.split("/").slice(-2);
    setActiveLink(window.location.pathname.split("/").pop() || "");
    setActiveSubLink(subPath || "");

    const handleRouteChange = () => {
      const [, subPath] = window.location.pathname.split("/").slice(-2);
      setActiveLink(window.location.pathname.split("/").pop() || "");
      setActiveSubLink(subPath || "");
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Button to toggle the sidebar on mobile */}
      <button
        onClick={toggleSidebar}
        className={`fixed md:hidden border-gradient bg-white top-0 left-0  mt-[78px] z-[999] p-[.35rem] `}
      >
        {isSidebarOpen ? <Menu /> : <X />}
      </button>
      <div
        className={`bg-white border-gradient md:border-none md:shadow-none p-2 flex flex-col mt-[78px] overflow-y-scroll no-scroll ${
          isSidebarOpen
            ? "hidden md:inline-flex "
            : " w-[225px] border-2 z-[998] border-t-0 border-l-0 md:flex-block md:border-none md:shadow-none left-[8px] md:left-20"
        }`}
      >
        {/* Section: Getting Started */}
        <h1 className="text-primary font-semibold mt-[1.75rem]">
          Getting Started
        </h1>
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
