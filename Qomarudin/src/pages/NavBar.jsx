import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "../logo.png";

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set title, description, and image from props
  }, []);

  return (
    <header>
        <nav className="nav">
          <div>
          <img className="logo" src={logo} />
          </div>
          <a href="/home" >Home</a>
          <a href="/about" >About</a>
          <a href="/contact" >Contact</a>
        </nav>
    </header>
  );
};
