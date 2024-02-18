import type { Metadata } from "next";
import { cardo } from "@/src/app/fonts";
import "./globals.css";
import Navigation from "@/src/app/components/Navigation/Navigation";
import Footer from "@/src/app/components/Footer/Footer";
import { SelectedItemProvider } from "../contexts/SelectedItemContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ModalProvider } from "../contexts/ModalContext";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: "John Gerard Woodwork Co.",
  keywords: "woodworking, custom, local business, furniture",
  authors: { name: "Joshua Duncan" },
  creator: "Joshua Duncan",
  publisher: "Joshua Duncan",
  description: "Professional custom woodwork company in Rochester, NY.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: {
      url: "/open-graph.png",
      width: 1402,
      height: 878,
    },
    title: "John Gerard Woodworking Company",
    description: "Professional custom woodwork company in Rochester, NY.",
    url: "/",
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
          <ModalProvider>
            <div className="page global__page-borders">
              <SelectedItemProvider>
                <Navigation></Navigation>
                {children}
                <SpeedInsights />
                <Analytics />
              </SelectedItemProvider>
            </div>
            <Footer />
          </ModalProvider>
        </div>
      </body>
    </html>
  );
}
