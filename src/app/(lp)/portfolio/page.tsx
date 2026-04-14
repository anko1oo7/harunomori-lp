import React from "react";
import {
  ArrowLeft,
  Youtube,
  Sparkles,
  CirclePlay,
  BadgeCheck,
} from "lucide-react";

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
            {/* Project 1 */}
            <div className="reveal space-y-6">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-video relative group">
                 <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/f-_RxbNK8lg" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
              </div>
              <div className="px-4">
                <div className="flex items-center gap-2 text-[var(--accent-strong)] font-bold text-sm uppercase tracking-wider">
                  <BadgeCheck className="h-4 w-4" />
                  フル尺MV (Full Animation)
                </div>
                <h3 className="mt-2 text-2xl font-black">Maybe - Full animation Ver. High-Speed GO Million (feat. XXX)</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-[var(--sakura)] text-[var(--accent-strong)] text-xs font-bold border border-[var(--accent-soft)]">1キャラ（キャラデザ含む）</span>
                  <span className="px-3 py-1 rounded-full bg-[var(--sky)] text-[var(--sky-accent)] text-xs font-bold border border-[var(--sky-accent)]/20">雰囲気：ロック、疾走感</span>
                  <span className="px-3 py-1 rounded-full bg-[var(--leaf)] text-[var(--leaf-accent)] text-xs font-bold border border-[var(--leaf-accent)]/20">おまかせ制作</span>
                </div>
                <p className="mt-6 text-[var(--ink-soft)] leading-relaxed font-medium">
                  制作指針として「ロック」「疾走感」というキーワードとキャラクターの基本イメージをいただき、
                  それ以外の構成や演出はすべて「おまかせ」で制作を担当しました。<br />
                  AIによる背景生成と、ダイナミックなキャラクターアニメーションを楽曲のスピード感に合わせて統合。
                  一人のクリエイターとしての感性を注ぎ込み、楽曲の世界観をフルアニメーションで完遂させた作品です。
                </p>
              </div>
            </div>

            {/* Project 2 - Sakuya */}
            <div className="reveal space-y-6" style={{ animationDelay: '0.1s' }}>
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-video relative group">
                 <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/hmSF1UrEovs" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
              </div>
              <div className="px-4">
                <div className="flex items-center gap-2 text-[var(--sky-accent)] font-bold text-sm uppercase tracking-wider">
                  <BadgeCheck className="h-4 w-4" />
                  フル尺MV (Conceptual Animation)
                </div>
                <h3 className="mt-2 text-2xl font-black">咲耶 - 『出現』(Sakuya - L' Apparition)</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-[var(--sky)] text-[var(--sky-accent)] text-xs font-bold border border-[var(--sky-accent)]/20">キャラリデザイン</span>
                  <span className="px-3 py-1 rounded-full bg-[var(--sakura)] text-[var(--accent-strong)] text-xs font-bold border border-[var(--accent-soft)]">再解釈：ギュスターヴ・モロー</span>
                  <span className="px-3 py-1 rounded-full bg-[var(--leaf)] text-[var(--leaf-accent)] text-xs font-bold border border-[var(--leaf-accent)]/20">おまかせ・数回修正</span>
                </div>
                <p className="mt-6 text-[var(--ink-soft)] leading-relaxed font-medium">
                  既存のキャラクターを楽曲の象徴的な世界観に合わせてリデザイン。
                  ギュスターヴ・モローの傑作『出現』をインスピレーションの源泉として共有いただき、
                  その退廃的で幻想的な空気感を現代のAI技術で再解釈しました。<br />
                  「おまかせ」の信頼を軸に、細部への数回のこだわりを経て完成。
                  アーティストの持つ哲学を、一枚の絵画から一本のアニメーションへと昇華させた作品です。
                </p>
              </div>
            </div>

            {/* Project 3 - Mominoki (Independent) */}
            <div className="reveal space-y-6">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-video relative group">
                 <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ix0H8ERAhz0" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
              </div>
              <div className="px-4">
                <div className="flex items-center gap-2 text-[var(--leaf-accent)] font-bold text-sm uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  ローコストMV (Sample)
                </div>
                <h3 className="mt-2 text-2xl font-black">もみの木とひかりのうた - Harufloria</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-[var(--leaf)] text-[var(--leaf-accent)] text-xs font-bold border border-[var(--leaf-accent)]/20">自主制作作品</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-[var(--muted)] text-xs font-bold border border-[var(--line)]">ローコストMV作例（〜60秒）</span>
                  <span className="px-3 py-1 rounded-full bg-[var(--sakura)] text-[var(--accent-strong)] text-xs font-bold border border-[var(--accent-soft)]">3人歌唱演出</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-[var(--muted)] text-xs font-bold border border-[var(--line)]">制作期間：3日〜1週間程度</span>
                </div>
                <p className="mt-6 text-[var(--ink-soft)] leading-relaxed font-medium">
                  クリスマス用に制作した楽曲に映像を付与した、短尺のローコストMVの作例です。
                  3人のキャラクターが楽しげに合唱しているような演出のサンプルとして制作しました。<br />
                  短期間での制作ながら、楽曲の温かい雰囲気を視覚的に補完する構成となっています。
                </p>
              </div>
            </div>

            {/* Project 4 - Soshun no Gekkan (Independent) */}
            <div className="reveal space-y-6" style={{ animationDelay: '0.1s' }}>
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-video relative group">
                 <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/RcZ0UJSpADo" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
              </div>
              <div className="px-4">
                <div className="flex items-center gap-2 text-[var(--sakura-accent)] font-bold text-sm uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  ローコストMV (Sample)
                </div>
                <h3 className="mt-2 text-2xl font-black">【short Anime MV】 早春の月冠 - Harufloria</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-[var(--sakura)] text-[var(--accent-strong)] text-xs font-bold border border-[var(--accent-soft)]">自主制作作品</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-[var(--muted)] text-xs font-bold border border-[var(--line)]">ローコストMV作例（〜60秒）</span>
                  <span className="px-3 py-1 rounded-full bg-[var(--sky)] text-[var(--sky-accent)] text-xs font-bold border border-[var(--sky-accent)]/20">AI動画ツール活用</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-[var(--muted)] text-xs font-bold border border-[var(--line)]">制作期間：3日〜1週間程度</span>
                </div>
                <p className="mt-6 text-[var(--ink-soft)] leading-relaxed font-medium">
                  「早春の月冠」をテーマにした、自主制作のショートアニメMVです。
                  Nano BananaやKlingといった最新のAIツールを駆使し、低予算・短期間ながらも幻想的で情緒豊かな世界観を表現した作例です。<br />
                  AIならではの緻密な描写とアニメーションを融合させ、楽曲の持つ繊細な雰囲気を視覚的に昇華させました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
