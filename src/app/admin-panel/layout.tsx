import { Suspense } from "react";
import TitleBanner from "../components/TitleBanner/TitleBanner";
import SideNav from "./Components/SideNav/SideNav";
import "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-panel-layout">
      <div className="admin-panel__sidenav">
        <SideNav />
      </div>
      <div className="admin-panel__display-panel global__page-background">
        <TitleBanner title={"ADMIN PANEL"} />
        <div className="admin-panel__children">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
