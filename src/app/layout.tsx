import type { Metadata } from "next";
import { cardo } from "@/src/app/fonts";
import "./globals.css";
import Header from "@/src/app/ui/Header/Header";
import Footer from "@/src/app/ui/Footer/Footer";

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
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
