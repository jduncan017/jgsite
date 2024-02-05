import type { Metadata } from "next";
import { cardo } from "@/src/app/fonts";
import "./globals.css";
import Navigation from "@/src/app/components/Navigation/Navigation";
import Footer from "@/src/app/components/Footer/Footer";
import { SelectedItemProvider } from "../contexts/selectedItemContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "John Gerard Woodwork Co.",
  keywords: "woodworking, custom, local business, furniture",
  authors: { name: "Joshua Duncan" },
  creator: "Joshua Duncan",
  publisher: "Joshua Duncan",
  description: "Professional custom woodwork company in Rochester, NY.",
  alternates: {
    canonical: "https://www.johngerardwoodwork.com",
  },
  openGraph: {
    images: {
      url: "https://www.johngerardwoodwork.com/shared/open-graph.png",
      width: 1402,
      height: 878,
    },
    title: "John Gerard Woodworking Company",
    description: "Professional custom woodwork company in Rochester, NY.",
    url: "https://www.johngerardwoodwork.com",
    locale: "en_US",
    type: "website",
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
