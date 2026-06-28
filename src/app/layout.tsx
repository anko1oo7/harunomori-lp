import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIアニメMV制作 | 玻瑠の杜",
  description:
    "「玻璃も瑠璃も照らせば光る」。AIと感性が響き合う、あなただけの特別なMV制作を。AIクリエイター・ディレクターの『餡子』が主宰する「玻瑠の杜」へようこそ。",
  openGraph: {
    title: "AIアニメMV制作 | 玻瑠の杜",
    description:
      "「玻璃も瑠璃も照らせば光る」。AIと感性が響き合う、あなただけの特別なMV制作を。AIクリエイター・ディレクターの『餡子』が主宰する「玻瑠の杜」へようこそ。",
    url: "https://harunomori-lp.vercel.app",
    siteName: "玻瑠の杜",
    images: [
      {
        url: "/images/ogp-harunomori.png",
        width: 1200,
        height: 630,
        alt: "AIアニメMV制作 玻瑠の杜",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIアニメMV制作 | 玻瑠の杜",
    description:
      "「玻璃も瑠璃も照らせば光る」。AIと感性が響き合う、あなただけの特別なMV制作を。AIクリエイター・ディレクターの『餡子』が主宰する「玻瑠の杜」へようこそ。",
    images: ["/images/ogp-harunomori.png"],
  },
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
