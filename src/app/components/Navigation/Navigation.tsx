"use client";

import "./Navigation.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoPath from "@/public/header/logo.png";
import headerAccentImage from "@/public/shared/woodAccent.webp";
import openMenuIcon from "@/public/header/Hamburger_icon.svg";
import closeMenuIcon from "@/public/shared/close-button.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({}) => {
  const pathname = usePathname();
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpened(!isMobileMenuOpened);
  };

  // close mobile menu on app navigation
  useEffect(() => {
    setMobileMenuOpened(false);
  }, [pathname]);

  const getLinkContainerClassname = (urlPath: string) => {
    return pathname === urlPath ? "header__navigation_active-link" : "";
  };

  const getLinkTextClassName = (path: string) => {
    return pathname === path ? "global__active-link" : "";
  };

  return (
    <div className="header">
      <Link href="/">
        <Image
          src={logoPath}
          alt="JohnGerard Logo"
          className="header__logo"
          width={130}
          height={130}
        />
      </Link>
      {/* Mobile Menu */}
      <div className=".header__mobile-menu">
        <ul
          className={`mobile-menu__navigation ${
            isMobileMenuOpened ? "mobile-menu__navigation_opened" : ""
          }`}
        >
          <li
            className={`mobile-menu__navigation-text ${getLinkContainerClassname(
              "/"
            )}`}
          >
            <Link href="/" className={getLinkTextClassName("/")}>
              Home
            </Link>
          </li>
          <li
            className={`mobile-menu__navigation-text ${getLinkContainerClassname(
              "/woodshop"
            )}`}
          >
            <div>
              <Link
                href="/woodshop"
                className={getLinkTextClassName("/woodshop")}
              >
                Woodshop
              </Link>
            </div>
          </li>
          <li
            className={`mobile-menu__navigation-text ${getLinkContainerClassname(
              "/contact"
            )}`}
          >
            <Link href="/contact" className={getLinkTextClassName("/contact")}>
              Contact
            </Link>
          </li>
          <li
            className={`mobile-menu__navigation-text ${getLinkContainerClassname(
              "/our-story"
            )}`}
          >
            <Link
              href="/our-story"
              className={getLinkTextClassName("/our-story")}
            >
              Our Story
            </Link>
          </li>
        </ul>
      </div>
      <button
        onClick={toggleMobileMenu}
        className={
          isMobileMenuOpened
            ? "header__mobile-menu header__mobile-menu_opened"
            : "header__mobile-menu"
        }
        aria-label={isMobileMenuOpened ? "Close menu" : "Open menu"}
      >
        <Image
          src={isMobileMenuOpened ? closeMenuIcon : openMenuIcon}
          alt={isMobileMenuOpened ? "Close menu" : "Open menu"}
          className={
            isMobileMenuOpened
              ? "header__mobile-menu-image mobile-menu__close-icon"
              : "header__mobile-menu-image mobile-menu__open-icon"
          }
          height={45}
          width={45}
        />
      </button>

      {/* Desktop Menu */}
      <ul className="header__navigation">
        <li
          className={`header__navigation-text ${getLinkContainerClassname(
            "/"
          )}`}
        >
          <Link href="/" className={getLinkTextClassName("/")}>
            Home
          </Link>
        </li>
        <li
          className={`header__navigation-text ${getLinkContainerClassname(
            "/woodshop"
          )}`}
        >
          <Link href="/woodshop" className={getLinkTextClassName("/woodshop")}>
            Woodshop
          </Link>
        </li>
        <li
          className={`header__navigation-text ${getLinkContainerClassname(
            "/contact"
          )}`}
        >
          <Link href="/contact" className={getLinkTextClassName("/contact")}>
            Contact
          </Link>
        </li>
        <li
          className={`header__navigation-text ${getLinkContainerClassname(
            "/our-story"
          )}`}
        >
          <Link
            href="/our-story"
            className={getLinkTextClassName("/our-story")}
          >
            Our Story
          </Link>
        </li>
      </ul>
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

export default Navigation;
