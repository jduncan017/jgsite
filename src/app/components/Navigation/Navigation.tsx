"use client";

import "./Navigation.css";
import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import logoPath from "@/public/header/logo.png";
import navBarAccentImage from "@/public/shared/woodAccent.webp";
import openMenuIcon from "@/public/header/Hamburger_icon.svg";
import closeMenuIcon from "@/public/shared/close-button.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/src/contexts/ModalContext";
import ContactForm from "../ContactForm/ContactForm";
import { cardo } from "../../fonts";

const Navigation = ({}) => {
  const pathname = usePathname();
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const { showModal } = useModal();

  function showContactModal(content: ReactNode) {
    setMobileMenuOpened(false);
    showModal(content);
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpened(!isMobileMenuOpened);
  };

  // close mobile menu on app navigation
  useEffect(() => {
    setMobileMenuOpened(false);
  }, [pathname]);

  //These 2 funcitions show the current page in the nav bar
  const getLinkContainerClassname = (urlPath: string) => {
    return pathname === urlPath ? "nav-bar__navigation_active-link" : "";
  };

  const getLinkTextClassName = (path: string) => {
    return pathname === path ? "global__active-link" : "";
  };

  return (
    <nav className="nav-bar">
      <Link href="/">
        <Image
          src={logoPath}
          alt="JohnGerard Logo"
          className="nav-bar__logo"
          width={130}
          height={130}
        />
      </Link>
      {/* Mobile Menu */}
      <div className=".nav-bar__mobile-menu">
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
          <li className="mobile-menu__navigation-text">
            <button
              type="button"
              onClick={() => showContactModal(<ContactForm />)}
              className={`nav-bar__navigation-text ${cardo.className}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      <button
        onClick={toggleMobileMenu}
        className={
          isMobileMenuOpened
            ? "nav-bar__mobile-menu nav-bar__mobile-menu_opened"
            : "nav-bar__mobile-menu"
        }
        aria-label={isMobileMenuOpened ? "Close menu" : "Open menu"}
      >
        <Image
          src={isMobileMenuOpened ? closeMenuIcon : openMenuIcon}
          alt={isMobileMenuOpened ? "Close menu" : "Open menu"}
          className={
            isMobileMenuOpened
              ? "nav-bar__mobile-menu-image mobile-menu__close-icon"
              : "nav-bar__mobile-menu-image mobile-menu__open-icon"
          }
          height={45}
          width={45}
        />
      </button>

      {/* Desktop Menu */}
      <ul className="nav-bar__navigation">
        <li
          className={`nav-bar__navigation-text ${getLinkContainerClassname(
            "/"
          )}`}
        >
          <Link href="/" className={getLinkTextClassName("/")}>
            Home
          </Link>
        </li>
        <li
          className={`nav-bar__navigation-text ${getLinkContainerClassname(
            "/woodshop"
          )}`}
        >
          <Link href="/woodshop" className={getLinkTextClassName("/woodshop")}>
            Woodshop
          </Link>
        </li>
        <li
          className={`nav-bar__navigation-text ${getLinkContainerClassname(
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
        <li>
          <button
            type="button"
            onClick={() => showContactModal(<ContactForm />)}
            className={`nav-bar__navigation-text ${cardo.className}`}
          >
            Contact
          </button>
        </li>
      </ul>
      <Image
        src={navBarAccentImage}
        alt="nav-bar accent"
        className="global__wood-accent"
        width={960}
        height={20}
      />
    </nav>
  );
};

export default Navigation;
