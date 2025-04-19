import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Koki AOYAGI",
  description: "Hi! I'm Koki AOYAGI. This is my profile.",
  icons: "./favicon.ico",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
