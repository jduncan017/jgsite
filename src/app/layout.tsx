import type { Metadata } from "next";
import { enriqueta } from "@/app/fonts";
import "./globals.css";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";

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
      <body className={`${enriqueta.className} layout`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
