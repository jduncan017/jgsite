import "./header.css";
import Image from "next/image";
import logoPath from "@/../public/logo.png";
import headerAccentImage from "@/../public/headerAccent.jpg";
import Link from "next/link";

const Header = ({}) => {
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
