"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Twitter, Mic2, FileText, Instagram } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon?: React.ElementType;
}

interface FooterSection {
  title: string;
  links: NavLink[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections: FooterSection[] = [
    {
      title: "Navigation",
      links: [
        { name: "Top", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Concept", href: "/concept" },
        { name: "FAQ", href: "/faq" },
        { name: "Pricing", href: "/#pricing" },
      ],
    },
    {
      title: "SNS",
      links: [
        { name: "X (Twitter)", href: "https://x.com/anko1oo7", icon: Twitter },
        { name: "Podcast", href: "https://open.spotify.com/show/1A7j3PQGYi1wKOcpqrnkQA?si=34d162da0e0f4306", icon: Mic2 },
        { name: "note", href: "https://note.com/anko1oo7", icon: FileText },
        { name: "Instagram (Preparing)", href: "#", icon: Instagram },
      ],
    },
  ];

  return (
    <footer className="mt-20 border-t border-slate-100 bg-white/50 py-16 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-12">
          {/* Brand Session */}
          <div className="md:col-span-2 lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-strong)] text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">STUDIO 玻瑠の杜</span>
            </Link>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-[var(--muted)]">
              AIと人間の感性を融合させ、音楽の「魂」を視覚化する。
              あなたの楽曲に、新しい息吹を。
            </p>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title} className="lg:col-span-3 space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-[var(--ink-soft)]">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-sm font-bold text-[var(--muted)] transition-colors hover:text-[var(--accent-strong)]"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.icon && <link.icon className="h-4 w-4 transition-transform group-hover:scale-110" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-slate-100 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs font-bold text-[var(--muted)]">
            &copy; {currentYear} STUDIO 玻瑠の杜. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs font-bold text-[var(--muted)] hover:text-[var(--accent-strong)] transition-colors">利用規約 / プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
