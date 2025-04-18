import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koki AOYAGI",
  description: "Hi! I'm Koki AOYAGI. This is my profile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
