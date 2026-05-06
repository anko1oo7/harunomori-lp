import React from "react";
import { Youtube, BadgeCheck, Sparkles } from "lucide-react";
import { works } from "@/lib/works";

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-20">

      {/* Hero */}
      <section className="hero-shell pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl text-center reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--sakura)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--sakura-accent)]">
            <Youtube className="h-3.5 w-3.5" />
            Works Gallery
          </div>
          <h1 className="mt-8 text-[clamp(2.5rem,8vw,5rem)] font-[900] leading-none tracking-tight">
            制作実績ギャラリー
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-[var(--ink-soft)] font-medium">
            AIとクリエイティビティが融合した、これまでの制作物をご紹介します。
            それぞれの作品に込めた想いと、技術的な挑戦をご覧ください。
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {works.map((work, index) => (
              <div 
                key={work.id} 
                className="reveal space-y-6" 
                style={{ animationDelay: `${index % 2 === 0 ? '0s' : '0.1s'}` }}
              >
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-video relative group">
                   <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${work.embedId}`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                </div>
                <div className="px-4">
                  <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider" style={{ color: work.categoryStyle }}>
                    {work.category === "プレミアムプラン" ? (
                      <BadgeCheck className="h-4 w-4" />
                    ) : (
                      <Sparkles className="h-4 w-4" />
                    )}
                    {work.category}
                  </div>
                  <h3 className="mt-2 text-2xl font-black">{work.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {work.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-xs font-bold border"
                        style={{ 
                          backgroundColor: tag === "自主制作作品" ? "var(--sakura)" : (tag.includes("プレミアム") ? "var(--sakura)" : (tag.includes("スターター") ? "slate-100" : "var(--sky)")),
                          color: tag === "自主制作作品" ? "var(--accent-strong)" : (tag.includes("プレミアム") ? "var(--accent-strong)" : (tag.includes("スターター") ? "var(--muted)" : "var(--sky-accent)")),
                          borderColor: tag === "自主制作作品" ? "var(--accent-soft)" : (tag.includes("プレミアム") ? "var(--accent-soft)" : (tag.includes("スターター") ? "var(--line)" : "rgba(var(--sky-accent-rgb), 0.2)"))
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-[var(--ink-soft)] leading-relaxed font-medium">
                    {work.description.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
