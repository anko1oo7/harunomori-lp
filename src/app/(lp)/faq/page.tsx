"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Info,
  ShieldCheck,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    category: "制作内容とクオリティについて",
    icon: Info,
    color: "var(--sakura-accent)",
    items: [
      {
        q: "キャラクターのデザインは固定されますか？",
        a: "AI制作の特性上、シーンによってデザインにわずかなブレが生じることがあります。LoRA等の特殊な固定技術は使用せず、使用可能なツールを駆使して楽曲に合う表現を模索します。AI特有の「ゆらぎ」を含めた表現としてお楽しみください。",
      },
      {
        q: "「手描き風」など、特定の質感の指定はできますか？",
        a: "申し訳ございませんが、手描きに近い質感の再現や、細かなタッチの指定には対応しておりません。AIネイティブな表現を活かした制作となります。",
      },
      {
        q: "キャラクターデザインの持ち込みは可能ですか？",
        a: "可能です。ただし、楽曲を含むすべての素材の権利を依頼者様が所有し、AIへの参照が可能であることを証明できる素材に限ります。また、AIでの再現には限界があることをあらかじめご了承ください。",
      },
    ],
  },
  {
    category: "ご用意いただくもの・工程について",
    icon: Layers,
    color: "var(--leaf-accent)",
    items: [
      {
        q: "音源の形式に指定はありますか？",
        a: "トラブル防止のため、音源は「WAV形式」のみ受け付けております。また、歌詞テキストは必須となります。",
      },
      {
        q: "事前に絵コンテや構成を確認できますか？",
        a: "玻瑠の杜では低価格を実現するため、ビデオコンテや絵コンテの作成は行っておりません。構成は基本的に「おまかせ」いただくことで、スピーディーかつ安価に提供しております。",
      },
      {
        q: "納期はどのくらいですか？",
        a: "プランにより異なります。\n\nスタータープラン：3日〜1週間程度\nスタンダードプラン：1週間〜\nプレミアムプラン：1ヶ月〜\n\n詳しくは最新のスケジュールをご確認ください。なお、特急プランはございません。",
      },
    ],
  },
  {
    category: "権利・倫理について",
    icon: ShieldCheck,
    color: "var(--sky-accent)",
    items: [
      {
        q: "完成した動画の利用範囲を教えてください。",
        a: "基本的にYouTubeへのアップロードを想定しています。その他のSNS等で使用される場合は、可能な限り「玻瑠の杜」へのリンク記載をお願いしております。",
      },
      {
        q: "AI制作によるトラブルが心配です。",
        a: "制作後に発生したAI関連のトラブル（著作権等）について、当方は一切の責任を負いかねます。持ち込み素材の権利確認を含め、ご依頼者様の責任においてご利用をお願いいたします。",
      },
      {
        q: "AIの倫理的な問題についてはどう考えていますか？",
        a: "現状、常識的な範囲内での理解に基づき運用しております。使用ツールの規約に準じ、商用利用が認められた範囲で制作を行います。",
      },
    ],
  },
  {
    category: "修正・プランについて",
    icon: HelpCircle,
    color: "var(--accent-strong)",
    items: [
      {
        q: "修正は何度まで可能ですか？",
        a: "原則として3回まで無料です。具体的な修正範囲は各プランの規定をご確認ください。",
      },
      {
        q: "予算に合わせてプランをカスタマイズできますか？",
        a: "カスタマイズは承っておりません。あらかじめ決められた枠内での制作に特化することで、この価格を実現しております。",
      },
    ],
  },
];

const AccordionItem = ({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={`scope-card transition-all duration-300 ${isOpen ? "bg-white border-[var(--accent)] shadow-md" : "hover:bg-white/80"}`}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-[var(--ink)]">{q}</span>
        <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown className="h-5 w-5 text-[var(--accent-strong)]" />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="whitespace-pre-wrap text-base font-medium leading-relaxed text-[var(--ink-soft)] border-t border-[var(--line)] pt-4">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-20 text-center reveal">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-strong)] mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Support
          </div>
          <h1 className="text-[clamp(2.5rem,8vw,4rem)] font-[900] leading-tight tracking-tight text-[var(--ink)]">
            よくある質問 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-strong)] to-[var(--sky-accent)]">
              FAQ
            </span>
          </h1>
          <p className="mt-8 text-xl font-medium text-[var(--ink-soft)] max-w-2xl mx-auto">
            制作の特性や進め方について、事前にお伝えしたいことをまとめています。<br />
            ご依頼前に一読いただけますと幸いです。
          </p>
        </div>
      </section>

      {/* Categories and FAQ List */}
      <section className="px-6 relative">
        <div className="mx-auto max-w-4xl space-y-20">
          {faqData.map((category, catIdx) => (
            <div key={category.category} className="reveal" style={{ animationDelay: `${catIdx * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-black text-[var(--ink)] tracking-tight">
                  {category.category}
                </h2>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  return (
                    <AccordionItem
                      key={id}
                      q={item.q}
                      a={item.a}
                      isOpen={openItems.includes(id)}
                      onClick={() => toggleItem(id)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 mt-32">
        <div className="mx-auto max-w-4xl rounded-[50px] glass p-12 text-center reveal">
          <h2 className="text-3xl font-black text-[var(--ink)]">解決しなかった場合は？</h2>
          <p className="mt-4 text-lg font-bold text-[var(--ink-soft)]">
            その他のご不明点については、Googleフォームよりお気軽にお問い合わせください。
          </p>
          <div className="mt-10">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent-strong)] px-8 py-4 text-lg font-black text-white shadow-xl shadow-rose-200 transition-all hover:scale-105 hover:bg-[var(--accent-deep)]"
            >
              お問い合わせはこちら
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
