import type { Metadata } from "next";
import { cardo } from "@/src/app/components/fonts";
import "./globals.css";
import Navigation from "@/src/app/components/Navigation/Navigation";
import Footer from "@/src/app/components/Footer/Footer";
import { SelectedItemProvider } from "../contexts/selectedItemContext";

export const metadata: Metadata = {
  title: "John Gerard Woodworking",
  description: "Landing Page for John Gerard woodworking company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cardo.className} layout`}>
        <div className="global__page-borders">
          <SelectedItemProvider>
            <Navigation></Navigation>
            {children}
          </SelectedItemProvider>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
