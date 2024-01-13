"use client";

import "./header.css";
import { useState } from "react";
import Image from "next/image";
import logoPath from "@/public/logo.png";
import headerAccentImage from "@/public/headerAccent.jpg";
import openMenuIcon from "@/public/hamburger-icon.png";
import closeMenuIcon from "@/public/close-button-black.svg";
import Link from "next/link";

const Header = ({}) => {
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <div className="header">
      <Link href="/">
        <Image src={logoPath} alt="JohnGerard Logo" className="header__logo" />
      </Link>
      <ul className="header__navigation">
        <li className="header__navigation_text">
          <Link href="/">Home</Link>
        </li>
        <li className="header__navigation_text">
          <Link href="/woodshop">Woodshop</Link>
        </li>
        <li className="header__navigation_text">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="header__navigation_text">
          <Link href="/our-story">Our Story</Link>
        </li>
      </ul>
      <button
        onClick={toggleMobileMenu}
        className="header__mobile-menu"
        aria-label={isMobileMenuOpened ? "Close menu" : "Open menu"}
      >
        <Image
          src={isMobileMenuOpened ? closeMenuIcon : openMenuIcon}
          alt={isMobileMenuOpened ? "Close menu" : "Open menu"}
          height={45}
          width={45}
          className="header__mobile-menu-image"
        />
      </button>
      <Image
        src={headerAccentImage}
        alt="header accent"
        className="global__wood-accent"
        width={960}
        height={20}
      />
    </div>
  );
};

export default Header;
