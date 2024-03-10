"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const DocNav: React.FC = () => {
  // State variables to manage navigation information
  const [nextUrlInput, setNextUrlInput] = useState<string>("");
  const [nextUrl, setNextUrl] = useState<string>("");
  const [nextTitle, setNextTitle] = useState<string>("");
  const [prevTitle, setPrevTitle] = useState<string>("");
  const [prevUrl, setPrevUrl] = useState<string>("");

  useEffect(() => {
    // Initialize the nextUrlInput with the current pathname
    setNextUrlInput(window.location.pathname);
  }, []);

  useEffect(() => {
    // Switch case to determine next and previous navigation based on current path
    switch (nextUrlInput) {
      // Define navigation logic for each case
      case "/docs":
        // Setting the next and previous navigation details
        setNextUrl("/docs/rooty");
        setNextTitle("Rooty");
        setPrevTitle("Landing Page");
        setPrevUrl("/");
        break;
      case "/docs/rooty":
        setNextUrl("/docs/tooty");
        setNextTitle("Tooty");
        setPrevTitle("Getting Sharted");
        setPrevUrl("/docs");
        break;
      case "/docs/tooty":
        setNextUrl("/docs/booty");
        setNextTitle("Booty");
        setPrevTitle("Getting Started");
        setPrevUrl("/docs/rooty");
        break;
      case "/docs/booty":
        setNextUrl("/docs/scooty");
        setNextTitle("Scooty");
        setPrevTitle("Tooty");
        setPrevUrl("/docs/tooty");
        break;
      case "/docs/scooty":
        setNextUrl("/docs/main");
        setNextTitle("Main");
        setPrevTitle("Scooty");
        setPrevUrl("/docs/booty");
        break;
      case "/docs/main":
        setNextUrl("/docs/main/sub");
        setNextTitle("Sub");
        setPrevTitle("Main");
        setPrevUrl("/docs/scooty");
        break;
      case "/docs/main/sub":
        setNextUrl("/docs");
        setNextTitle("Get Sharted");
        setPrevTitle("Main");
        setPrevUrl("/docs/main");
        break;

      // ... (Continue for other cases)
    }
  }, [nextUrlInput]);

  // Rendering the navigation buttons with Next and Previous links
  return (
    <div className="flex flex-wrap gap-2">
      <Link href={prevUrl} className="btn-hover border-gradient px-4 py-2">
        Prev: {prevTitle}
      </Link>
      <Link href={nextUrl} className="btn-hover border-gradient px-4 py-2">
        Next: {nextTitle}
      </Link>
    </div>
  );
};

export default DocNav;
