import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollBarProvider } from "@/context/ScrollBarContext";
import { ContentfulProvider } from "@/context/ContentfulContext";
import ContentFulData from "@/server/ContentFullData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollBarProvider>
          {/* <ContentfulProvider> */}
          <ContentFulData >

            <Header />
            <main className="flex w-full min-h-screen justify-center py-12">{children}</main>
            <Footer />
          {/* </ContentfulProvider> */}
          </ContentFulData>
        </ScrollBarProvider>
      </body>
    </html>
  );
}
