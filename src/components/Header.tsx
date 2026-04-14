"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Top", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Concept", href: "/concept" },
    { name: "FAQ", href: "/faq" },
    { name: "Pricing", href: "/#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full glass px-6 py-3 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-strong)] text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-lg font-extrabold tracking-tight">STUDIO 玻瑠の杜</span>
        </Link>
        
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-colors hover:text-[var(--accent-strong)] ${
                pathname === link.href ? "text-[var(--accent-strong)]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="rounded-full bg-[var(--accent-strong)] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-[var(--accent-deep)]"
        >
          ご相談はこちら
        </Link>
      </nav>
    </header>
  );
};

export default Header;
