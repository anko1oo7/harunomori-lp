import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIアニメMV制作 | 玻瑠の杜",
  description:
    "「玻璃も瑠璃も照らせば光る」。AIと感性が響き合う、あなただけの特別なMV制作を。AIクリエイター・ディレクターの『餡子』が主宰する「玻瑠の杜」へようこそ。",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="font-sans antialiased text-white bg-[#0f1115]">
        {children}
      </body>
    </html>
  );
}
