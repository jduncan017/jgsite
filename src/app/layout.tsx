import type { Metadata } from "next";
import { cardo } from "@/src/app/components/fonts";
import "./globals.css";
import Navigation from "@/src/app/components/Navigation/Navigation";
import Footer from "@/src/app/components/Footer/Footer";
import { SelectedItemProvider } from "../contexts/selectedItemContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "John Gerard Woodwork Co.",
  description: "Professional custom woodwork company in Rochester, NY.",
  openGraph: {
    images: "/shared/open-graph.png",
    title: "John Gerard Woodworking Company",
    description: "Professional custom woodwork company in Rochester, NY.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cardo.className} layout`}>
        <div className="page-wrapper">
          <div className="page global__page-borders">
            <SelectedItemProvider>
              <Navigation></Navigation>
              {children}
              <SpeedInsights />
            </SelectedItemProvider>
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
