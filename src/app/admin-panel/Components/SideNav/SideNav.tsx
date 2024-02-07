import Link from "next/link";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">EDIT DATA</h2>
      <div className="sidebar__options">
        <Link href={"/admin-panel/"}>
          <button className="sidebar__button" type="button">
            Edit Items
          </button>
        </Link>
        <Link href={"/admin-panel/text-edit"}>
          <button className="sidebar__button" type="button">
            Edit Text Content
          </button>
        </Link>
        <button className="sidebar__button" type="button">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideNav;
