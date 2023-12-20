import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} layout`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
