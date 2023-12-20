import "./HeaderAccent.css";
import Image from "next/image";
import headerAccentImage from "../../../public/headerAccent.jpg";

interface HeaderAccentProps {
  reverseImage?: boolean;
}

const HeaderAccent = ({ reverseImage = false }: HeaderAccentProps) => {
  return (
    <Image
      src={headerAccentImage}
      alt="header accent"
      layout="cover"
      className={`header__accent ${
        reverseImage ? "header__accent_reversed" : ""
      }`}
    />
  );
};

export default HeaderAccent;
