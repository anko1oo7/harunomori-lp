"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CirclePlay,
  Clapperboard,
  FileText,
  MessageSquareQuote,
  Music4,
  Sparkles,
  Youtube,
  Heart,
  Palette,
  Award,
  Mic,
  BookOpen,
  Twitter,
  Instagram,
  X,
  Feather,
} from "lucide-react";
import { works } from "@/lib/works";
import Link from "next/link";

const plans = [
  {
    title: "スタータープラン",
    price: "25,000円",
    delivery: "3日〜1週間程度",
    description: "AIアニメMVをまず試してみたい方向けの、お試しショートプランです。「AIの映像表現に興味はあるけれど、いきなり大きな金額を出すのは不安」という方に向いています。短尺・シンプル構成で、まずは楽曲の雰囲気を映像として形にしたい方におすすめです。",
    suitableFor: [
      "AIアニメMVをまず試してみたい方",
      "短尺で雰囲気のある映像をつけたい方",
      "やり取りを少なめにして、スムーズに進めたい方"
    ],
    notes: [
      "短尺・シンプル構成を前提としたプランです。",
      "特殊演出、複雑なストーリー構成、細かな作り込みには対応していません。",
      "実績公開必須となります。",
      "ご希望内容によっては上位プランをご案内する場合があります。"
    ]
  },
  {
    title: "スタンダードプラン",
    price: "77,000円",
    delivery: "1週間〜",
    featured: true,
    description: "1コーラスの中で、楽曲の世界観や見せ場をしっかり形にする標準プランです。「せっかくMVを作るなら、安く済ませるだけではなく、ちゃんと印象に残るものにしたい」という方には、まずこちらがおすすめです。限られた尺の中でも、楽曲に合った空気感や世界観を大切にしながら、作品として成立するMVを目指します。",
    suitableFor: [
      "オリジナル曲や歌ってみたに、しっかりしたMVをつけたい方",
      "楽曲の見せ場や空気感を大事にしたい方",
      "低予算ではなく、作品として満足度の高い映像を作りたい方"
    ],
    notes: [
      "見せ場の設計や、楽曲に合った空気感づくりを重視した、もっともおすすめの主力プランです。"
    ]
  },
  {
    title: "プレミアムプラン",
    price: "132,000円〜",
    delivery: "1ヶ月〜",
    premium: true,
    description: "フル尺でしっかり世界観を作り込みたい方向けのプランです。「大切な1曲なので、映像も含めてしっかり作品として届けたい」という本気度の高い方に向いています。フル尺は、単純に尺が長くなるだけではなく、全体設計の重要度が大きくなります。本プランでは内容に合わせて丁寧に向き合いながら制作を進めます。",
    suitableFor: [
      "フル尺でMVを作りたい方",
      "世界観や空気感をより強く打ち出したい方",
      "記念曲や大切なリリースに合わせて映像にも力を入れたい方"
    ],
    notes: [
      "ご希望内容によって工数が大きく変わるため、132,000円からの個別見積もりとなります。",
      "月1件限定で制作しています。"
    ]
  },
];

const strengths = [
  "オリジナル曲をMVにしたい",
  "やりとりは少なめで進めたい",
  "雰囲気のある映像にしたい",
];

const concerns = [
  "どこまで頼めるか分からない",
  "確認の往復は少なめがいい",
  "ちゃんと世界観はほしい",
];

const deliverables = [
  "音源データ",
  "歌詞テキスト",
  "参考作品やイメージ",
  "使いたい素材があれば共有",
  "PSDはなくても大丈夫です",
];

const flow = [
  {
    step: "01",
    title: "受付",
    body: "フォームから楽曲情報やイメージを送っていただきます。連絡手段はメールまたはDiscordからお選びいただけます。",
  },
  {
    step: "02",
    title: "整理",
    body: "内容を確認し、進め方と対応範囲を整えます。",
  },
  {
    step: "03",
    title: "制作",
    body: "雰囲気を軸にAIで制作を進めます。",
  },
  {
    step: "04",
    title: "調整",
    body: "必要なところだけ確認しながら整えます。",
  },
  {
    step: "05",
    title: "納品",
    body: "完成データをお渡しします。",
  },
];

const cautions = [
  "AI生成特有の揺れがあります。",
  "複雑すぎる再現は難しい場合があります。",
  "大きな方向転換は再見積もりになる場合があります。",
];

export default function Home() {
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentWorkIndex((prev) => (prev + 1) % works.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, works.length]);

  return (
    <main className="min-h-screen text-[var(--ink)] pt-20">

      {/* Hero Section */}
      <section className="hero-shell flex min-h-[90vh] items-center px-6 pt-32 pb-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="space-y-4">
              <div className="inline-flex flex-wrap items-center gap-y-2 gap-x-4 rounded-3xl bg-white/50 backdrop-blur-md px-6 py-3 border border-[var(--accent-soft)] shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-tight text-[var(--accent-strong)]">Current Status</span>
                </div>
                <div className="h-4 w-px bg-[var(--line)] hidden md:block"></div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-bold text-[var(--ink-soft)]">
                  <span className="flex items-center gap-1.5"><span className="text-[var(--accent-strong)]">●</span> プレミアム: 2件進行中 (6月着手分から予約可)</span>
                  <span className="flex items-center gap-1.5"><span className="text-[var(--sky-accent)]">●</span> スタンダード: 要相談</span>
                  <span className="flex items-center gap-1.5"><span className="text-[var(--leaf-accent)]">●</span> スターター: 受注可</span>
                </div>
                <div className="h-4 w-px bg-[var(--line)] hidden md:block"></div>
                <div className="text-[10px] font-black text-[var(--muted)] uppercase border-l border-[var(--line)] pl-4 md:border-0 md:pl-0">
                  Last Updated: 2026.05.06
                </div>
              </div>
            </div>
            <h1 className="mt-8 text-[clamp(2rem,6vw,4.5rem)] font-[900] leading-[1.1] tracking-[-0.05em]">
              AIアニメ制作を <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-strong)] to-[var(--sky-accent)]">
                もっと軽やかに。
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-[var(--ink-soft)] font-medium">
              あなたの楽曲やキャラクターの魅力を、AIの魔法でフルアニメMVに。
              難しいことは考えず、まずは「ふんわり」としたイメージから始めてみませんか？
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent-strong)] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-rose-200 transition-all hover:scale-105 hover:bg-[var(--accent-deep)]"
              >
                プランを見る
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-lg font-bold transition-all hover:scale-105 hover:bg-white"
              >
                実績を見る
                <CirclePlay className="h-5 w-5 text-[var(--accent-strong)]" />
              </a>
            </div>
          </div>
          
          <div className="relative reveal hidden lg:block" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[4/5] w-[450px] mx-auto rounded-[60px] overflow-hidden shadow-2xl shadow-rose-100/50 border-[12px] border-white relative z-10 group transition-all duration-700 hover:scale-105 hover:rotate-1">
              <img 
                src="/images/harunomori.png" 
                alt="玻瑠の杜 メインビジュアル" 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-10">
                <div className="text-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--sakura)]">Concept Art</p>
                  <h3 className="text-2xl font-black mt-2">玻瑠の杜の世界観</h3>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[var(--sakura)] rounded-full blur-[100px] opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--sky)] rounded-full blur-[120px] opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="px-6 py-32 bg-white/30">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading reveal">
            <p>Portfolio</p>
            <h2>制作実績</h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div 
              className="lg:col-span-7 reveal" 
              style={{ animationDelay: '0.1s' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white group relative">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentWorkIndex * 100}%)` }}
                >
                  {works.map((work) => (
                    <div key={work.id} className="min-w-full aspect-video bg-black">
                      <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${work.embedId}`} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-bold text-[var(--muted)] animate-pulse">
                {works[currentWorkIndex].title}
              </p>
            </div>
            
            <div className="lg:col-span-5 reveal space-y-8" style={{ animationDelay: '0.3s' }}>
              {[
                { label: "フルAIアニメMVの圧倒的な世界観", color: "var(--sakura-accent)" },
                { label: "公開7日で2万再生突破の実績あり", color: "var(--leaf-accent)" },
                { label: "コンテスト最優秀賞 受賞歴あり", color: "var(--sky-accent)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform group-hover:rotate-12" style={{ backgroundColor: item.color }}>
                    <BadgeCheck className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-[var(--ink-soft)]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="mx-auto max-w-5xl text-center reveal">
          <div className="section-heading">
            <p>Our Policy</p>
            <h2>大切にしていること</h2>
          </div>
          <p className="mt-10 text-xl md:text-2xl leading-relaxed text-[var(--ink-soft)] font-medium">
            AIを活用して、楽曲やキャラクターの魅力を引き出すことを最優先にします。
            細かい整合性よりも、<span className="text-[var(--accent-strong)] underline decoration-wavy underline-offset-8">「全体の空気感」と「人の心に響く映像」</span>であることを重視して制作します。
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="value-card">
              <p>キャラクターらしい</p>
              <strong>世界観</strong>
            </div>
            <div className="value-card">
              <p>楽曲に寄り添った</p>
              <strong>空気感</strong>
            </div>
            <div className="value-card">
              <p>ワクワクするような</p>
              <strong>映像体験</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="px-6 py-32 bg-gradient-to-b from-white to-[var(--bg-soft)]">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading reveal">
            <p>Creator Profile</p>
            <h2>制作者について</h2>
          </div>

          <div className="mt-16 glass rounded-[60px] p-8 md:p-16 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[var(--sakura)] rounded-full blur-[100px] opacity-20"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
              {/* Profile Left: Basic Info & SNS */}
              <div className="lg:col-span-5 space-y-8">
                <div className="flex flex-col gap-10 items-start">
                  {/* Profile Image */}
                  <div className="relative group shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--sakura)] to-[var(--sky)] rounded-[50px] blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-700"></div>
                    <div className="relative h-64 w-64 overflow-hidden rounded-[50px] border-8 border-white shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[var(--sakura-accent)]/20">
                      <img 
                        src="/images/profile.png" 
                        alt="餡子（anko）" 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-strong)]">
                        AI Creator / Director
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)]">
                        餡子 <span className="text-2xl font-bold text-[var(--ink-soft)] ml-2">（anko）</span>
                      </h3>
                      <p className="text-xl md:text-2xl font-bold leading-relaxed text-[var(--accent-strong)] italic max-w-md">
                        「AIと人間の感性を融合させ、音楽の『魂』を視覚化するクリエイター。」
                      </p>
                    </div>

                    {/* SNS Links with Labels */}
                    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
                      {[
                        { href: "https://x.com/anko1oo7", icon: X, label: "X (Twitter)", color: "var(--ink)" },
                        { href: "https://open.spotify.com/show/1A7j3PQGYi1wKOcpqrnkQA?si=34d162da0e0f4306", icon: Mic, label: "Podcast", color: "#1DB954" },
                        { href: "https://note.com/anko1oo7", icon: BookOpen, label: "note", color: "#24b33b" },
                        { label: "Instagram", icon: Instagram, disabled: true }
                      ].map((sns, i) => (
                        sns.disabled ? (
                          <div 
                            key={i}
                            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-dashed border-[var(--line)] opacity-40 cursor-not-allowed"
                          >
                            <sns.icon className="h-5 w-5 text-[var(--muted)]" />
                            <span className="text-xs font-bold text-[var(--muted)]">Preparing...</span>
                          </div>
                        ) : (
                          <a 
                            key={i}
                            href={sns.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-sm border border-[var(--line)] transition-all hover:scale-105 hover:border-[var(--accent)] hover:shadow-md"
                          >
                            <sns.icon className="h-5 w-5 transition-colors group-hover:text-[var(--accent-strong)]" />
                            <span className="text-xs font-black text-[var(--ink-soft)] group-hover:text-[var(--ink)]">{sns.label}</span>
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Right: Achievements & STYLE */}
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-6">
                  <h4 className="flex items-center gap-3 text-lg font-black border-b border-[var(--line)] pb-2 pr-4 w-fit">
                    <Award className="h-5 w-5 text-[var(--accent-strong)]" />
                    主な実績
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { label: "フルAIアニメーションMV制作", detail: "企画からディレクション、編集まで一貫して担当。" },
                      { label: "20,000再生突破", detail: "公開からわずか7日間でYouTube再生数2万回超を記録。" },
                      { label: "コンテスト最優秀賞受賞", detail: "AI映像制作における技術力と演出力が評価され、最高賞を受賞。" },
                    ].map((item, i) => (
                      <li key={i} className="group">
                        <div className="flex items-start gap-4">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0 transition-transform group-hover:scale-150"></div>
                          <div>
                            <span className="block font-bold text-[var(--ink)]">{item.label}</span>
                            <span className="text-sm font-medium text-[var(--ink-soft)]">{item.detail}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="flex items-center gap-3 text-lg font-black border-b border-[var(--line)] pb-2 pr-4 w-fit">
                    <Feather className="h-5 w-5 text-[var(--sky-accent)]" />
                    制作スタイル
                  </h4>
                  <div className="rounded-3xl bg-white/50 p-6 border border-white">
                    <p className="text-lg font-bold leading-relaxed text-[var(--ink-soft)]">
                      「一曲入魂」を信条とし、最新技術をあくまで「筆」として使いこなすディレクション。
                    </p>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-[var(--muted)]">
                      特定のジャンルに縛られず、楽曲が持つ固有の温度感や色彩を最大限に引き出す映像表現を追求しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-32 bg-white/50">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading reveal">
            <p>Pricing</p>
            <h2>料金目安</h2>
          </div>

          <div className="mt-10 max-w-2xl mx-auto text-center reveal" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg md:text-xl leading-relaxed text-[var(--ink-soft)] font-medium">
              楽曲の尺や作り込みの深さに合わせて、3つのプランをご用意しています。<br />
              「まずはAIアニメMVを試してみたい方」から、<br className="hidden md:block" />
              「しっかり世界観を作り込みたい方」まで、目的に合わせて選びやすい構成にしています。
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <div
                key={plan.title}
                className={`reveal group rounded-[40px] p-8 md:p-10 transition-all hover:scale-[1.02] ${
                  plan.featured
                    ? "bg-gradient-to-br from-[var(--sakura)] to-white border-2 border-[var(--accent)] shadow-xl shadow-rose-100 relative z-10"
                    : "bg-white border border-[var(--line)] shadow-sm"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-[var(--accent-strong)] px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg">一番おすすめ</div>
                )}
                {plan.premium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-[var(--ink)] px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg">月1件限定</div>
                )}

                <h3 className="text-2xl font-black">{plan.title}</h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-[900] tracking-tighter text-[var(--ink)]">{plan.price.replace('円', '').replace('〜', '')}</span>
                  <span className="text-lg font-bold text-[var(--ink-soft)]">円</span>
                  {plan.price.includes('〜') && <span className="text-lg font-bold text-[var(--ink-soft)]">〜</span>}
                </div>
                
                <p className="mt-8 text-sm font-bold text-[var(--ink-soft)] leading-relaxed border-l-4 border-[var(--accent-soft)] pl-4">
                  {plan.description}
                </p>

                <div className="mt-10 space-y-4">
                  <p className="text-xs font-black text-[var(--muted)] uppercase tracking-wider">向いている方</p>
                  <ul className="space-y-3">
                    {plan.suitableFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-bold text-[var(--ink-soft)]">
                        <BadgeCheck className="h-5 w-5 text-[var(--accent-strong)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-8 border-t border-[var(--line)]">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-[10px] font-black text-[var(--muted)] uppercase tracking-widest mb-1">Estimated Delivery</p>
                      <p className="text-xl font-black text-[var(--accent-strong)]">{plan.delivery}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {plan.notes.map((note, idx) => (
                      <p key={idx} className="text-[11px] font-medium text-[var(--muted)] leading-relaxed flex gap-2">
                        <span className="shrink-0">※</span>
                        <span>{note}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-[40px] glass reveal" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-black flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-[var(--accent-strong)]" />
              追加オプションの目安
            </h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "実績公開不可", price: "+15,000円〜" },
                { label: "複数人歌唱（2人〜）", price: "+10,000円〜" },
                { label: "特殊演出・過度な修正", price: "都度お見積もり" },
              ].map((opt, i) => (
                <div key={i} className="flex justify-between items-center px-6 py-4 rounded-2xl bg-white/50 border border-white">
                  <span className="text-sm font-bold">{opt.label}</span>
                  <span className="font-black text-[var(--accent-strong)]">{opt.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center reveal" style={{ animationDelay: '0.5s' }}>
            <div className="inline-block rounded-[32px] bg-[var(--accent-soft)]/30 border border-[var(--accent-soft)] p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-[var(--ink-soft)] font-medium">
                やり取りをできるだけシンプルにするため、事前フォームでご希望内容を確認したうえで、<br className="hidden md:block" />
                基本的にはおまかせ寄りで制作しています。<br /><br />
                細かな打ち合わせを重ねるというより、最初に必要な情報を整理して、<br className="hidden md:block" />
                スムーズに形にしていく進め方です。<br /><br />
                そのため、<br />
                <span className="text-[var(--accent-strong)] font-black">「制作側にある程度委ねながら、世界観を形にしたい」</span><br />
                という方と相性がいいです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="px-6 py-32 bg-white/40">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading reveal">
            <p>Process</p>
            <h2>制作の流れ</h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6 relative">
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--sky)] to-[var(--leaf)] hidden md:block"></div>
            {flow.map((item, i) => (
              <div
                key={item.step}
                className="reveal flex flex-col md:flex-row gap-8 items-start relative z-10"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full glass text-xl font-black text-[var(--accent-strong)] shadow-sm">
                  {item.step}
                </div>
                <div className="rounded-[32px] glass p-8 w-full transition-all hover:bg-white/80">
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-[var(--ink-soft)] font-medium">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Cautions */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <div className="section-heading reveal">
            <p>Caution</p>
            <h2>大切なお知らせ</h2>
          </div>
          
          <div className="mt-16 space-y-4 reveal">
            {[
              "AI生成特有の、細部や装飾のゆらぎが発生する場合があります。",
              "キャラクターや衣装の完全な固定より、全体の印象を優先します。",
              "制作開始後の大幅な方向転換は、別途費用のご相談となる場合があります。",
              "著作権や規約に反する素材はお持ち込み、使用いただけません。"
            ].map((text, i) => (
              <div key={i} className="scope-card flex items-start gap-4">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent-strong)] shrink-0"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal" style={{ animationDelay: '0.4s' }}>
            <Link 
              href="/faq"
              className="group inline-flex items-center gap-2 text-lg font-black text-[var(--accent-strong)] hover:text-[var(--accent-deep)] transition-colors"
            >
              <span>よくある質問で詳細を確認する</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 pb-32">
        <div className="mx-auto max-w-7xl rounded-[60px] glass p-12 md:p-20 text-center relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[var(--sakura)] rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[var(--sky)] rounded-full blur-[100px] opacity-40"></div>
          
          <h2 className="text-4xl md:text-6xl font-black leading-tight relative z-10">
            あなたの楽曲、<br className="md:hidden" />
            <span className="text-[var(--accent-strong)]">アニメの世界へ。</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl font-bold text-[var(--ink-soft)] relative z-10 leading-relaxed">
            「こういう曲でも合うかな？」という段階でも大丈夫です。<br /><br />
            事前フォームでご希望内容を確認しながら、<br className="hidden md:block" />
            できるだけやり取りをシンプルにしつつ、楽曲の世界観に合った形をご提案します。<br /><br />
            まだ依頼するか迷っている段階でも、お気軽にどうぞ。
          </p>
          
          <p className="mt-8 text-sm font-bold text-[var(--muted)] relative z-10">
            お問い合わせはGoogleフォームより受け付けています。<br />
            連絡手段（メール・Discord）もご希望に合わせてお選びいただけます。
          </p>
          
          <div className="mt-12 flex flex-col items-center gap-6 relative z-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScH_2ST2Mh7UM-uATyCXnFFvr1h2ObzTUneZsOhc6C4Q4nt6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-[var(--accent-strong)] px-10 py-5 text-xl font-black text-white shadow-2xl shadow-rose-200 transition-all hover:scale-105 hover:bg-[var(--accent-deep)]"
            >
              お申し込みフォームを開く
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-sm font-bold text-[var(--muted)]">通常2〜3営業日以内にご返信いたします</p>
          </div>
        </div>
      </section>


    </main>
  );
}
