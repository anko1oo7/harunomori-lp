"use client";

import React from "react";
import { Sparkles, Brain, Palette, Music, Zap, Heart, ShieldCheck } from "lucide-react";

export default function ConceptPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Origin of the Name Section */}
        <section className="mb-32">
          <div className="glass rounded-[50px] p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[var(--sakura)] rounded-full blur-[100px] opacity-20"></div>
            <h2 className="text-3xl font-black mb-10 flex items-center gap-3">
              <div className="h-8 w-1 bg-[var(--accent-strong)] rounded-full"></div>
              屋号「玻瑠の杜」に込めた想い
            </h2>
            <div className="space-y-8 text-lg text-[var(--ink-soft)] font-medium leading-relaxed">
              <p>
                「玻璃も瑠璃も照らせば光る」。<br />
                このことわざのように、どんなに深く埋もれていても、正しい光を当てればその石にしかない輝きを放つ瞬間があります。
              </p>
              <p>
                私たちは、アーティストの皆様が心の中に持つ「玻璃」や「瑠璃」のような輝きを、AIという光で照らし出したいと考えています。
              </p>
              <p>
                「杜（もり）」という言葉は、AIという、人の手によって築かれ、豊かに完成された場所を指して名付けました。
                その静寂で緻密な杜の中で、あなたの物語が一番美しく花開く場所でありたい。
                それが「玻瑠の杜」の願いです。
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section (from Philosophy) */}
        <section className="space-y-12 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-2xl bg-[var(--sakura)] flex items-center justify-center">
                <Heart className="h-6 w-6 text-[var(--accent-strong)]" />
              </div>
              <h2 className="text-3xl font-black">アーティストへのリスペクト</h2>
              <p className="text-[var(--ink-soft)] leading-relaxed font-medium">
                楽曲のメロディ、歌詞の響き、そして歌い手の感情。
                それらが生み出した熱量を、AIを使って最大限に増幅させること。
                私たちは技術そのものよりも、「何を表現するか」という人間的な感性を最も大切にしています。
                一人のクリエイターとしてあなたの楽曲と対峙し、魂を込めて筆を執ります。
              </p>
            </div>
            <div className="relative h-full aspect-video md:aspect-square flex items-center justify-center overflow-hidden rounded-[80px] bg-white shadow-inner border border-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--sakura)]/30 to-[var(--sky)]/30"></div>
              {/* Abstract Glass Elements */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-40 h-40 bg-white/40 backdrop-blur-md rounded-3xl rotate-12 -translate-x-12 translate-y-8 border border-white/60 shadow-xl"></div>
                <div className="absolute w-32 h-32 bg-gradient-to-tr from-[var(--accent)]/20 to-transparent backdrop-blur-sm rounded-full translate-x-16 -translate-y-12 border border-white/40 shadow-lg animate-pulse"></div>
                <div className="absolute w-24 h-24 bg-white/30 backdrop-blur-lg rounded-2xl -rotate-12 translate-x-4 translate-y-20 border border-white/50 shadow-md"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <Sparkles className="h-24 w-24 text-[var(--accent-strong)]/30 absolute drop-shadow-sm scale-110" />
                  <Heart className="h-40 w-40 text-[var(--accent-strong)]/20 fill-[var(--accent-strong)]/10 relative z-20 drop-shadow-xl animate-[gentle-swing_4s_infinite_ease-in-out]" />
                </div>
              </div>
              {/* Reflection Overlays */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Technical & Process Section */}
        <section className="space-y-32 mb-32">
          {/* Row 1: Translation & Synergy */}
          <div className="reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[var(--sky-accent)] font-bold">
                  <Brain className="h-5 w-5" />
                  Visual Translation
                </div>
                <h3 className="text-3xl font-black">音楽を「視覚」に翻訳する</h3>
                <p className="text-[var(--ink-soft)] leading-relaxed font-medium">
                  単なるプロンプト入力ではなく、楽曲を徹底的に解析。「この一音に合う色彩は何か？」「この休符にはどんな静寂が必要か？」を、AIを介して一つひとつのカットに落とし込んでいきます。
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[var(--leaf-accent)] font-bold">
                  <Palette className="h-5 w-5" />
                  AI Synergy
                </div>
                <h3 className="text-3xl font-black">AI特有の「ゆらぎ」を活かす</h3>
                <p className="text-[var(--ink-soft)] leading-relaxed font-medium">
                  AIが生成する幻想的で緻密な細部。その「偶発性」を不具合として排除するのではなく、楽曲の世界観を補完する「質感」として丁寧に磨き上げ、演出の一部に組み込みます。
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Emotion & Responsibility */}
          <div className="reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[var(--accent-strong)] font-bold">
                  <Music className="h-5 w-5" />
                  Emotion Sync
                </div>
                <h3 className="text-3xl font-black">感情が同期するアニメ映像</h3>
                <p className="text-[var(--ink-soft)] leading-relaxed font-medium">
                  サビでの爆発的な展開、あるいは静かなAメロでの色彩の沈黙。AIによる高度なスタイリング技術を駆使し、キャラクターの表情や背景の粒子一つひとつまで、音楽の盛り上がりに合わせてダイナミックに変化させます。
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[var(--accent-deep)] font-bold">
                  <ShieldCheck className="h-5 w-5" />
                  「Quality Responsibility」
                </div>
                <h3 className="text-3xl font-black">「軽やかさ」の裏にある、責任</h3>
                <p className="text-[var(--ink-soft)] leading-relaxed font-medium">
                  「軽やかな創作スタイル」は、決して「手を抜く」ことではありません。AIという膨大な可能性の中から、相応しい一瞬を執念を持って選び出す。その責任を果たすため、プレミアムプラン制作は月に1件という限定スロットでお受けしています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Message */}
        <section className="mt-32 p-12 glass rounded-[50px] text-center reveal">
          <h2 className="text-3xl font-black mb-6">AIという新しい選択肢を。</h2>
          <p className="text-lg text-[var(--ink-soft)] font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            これまでは膨大なコストと時間が必要だったフルアニメーションMVを、もっと軽やかに、もっと表現の自由度高く。
            あなたの音楽が持つポテンシャルを、私たちはAIと共に最大限に引き出します。
          </p>
          <button 
            onClick={() => window.location.href='/#contact'}
            className="px-8 py-4 bg-[var(--accent-strong)] text-white rounded-full font-bold shadow-lg shadow-rose-200 transition hover:-translate-y-1 hover:brightness-110 flex items-center gap-2 mx-auto"
          >
            一緒に作品をつくりませんか？
            <Zap className="h-4 w-4" />
          </button>
        </section>
      </div>
    </main>
  );
}
