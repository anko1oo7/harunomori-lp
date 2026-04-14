"use client";

import React from "react";
import { ShieldCheck, Scale, Lock, ArrowLeft, Sparkles, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-strong)] mb-6">
            <ShieldCheck className="h-3.5 w-3.5" />
            Legal Information
          </div>
          <h1 className="text-4xl md:text-5xl font-[900] text-[var(--ink)] tracking-tight">
            利用規約・プライバシーポリシー
          </h1>
          <p className="mt-6 text-lg font-medium text-[var(--ink-soft)]">
            STUDIO 玻瑠の杜 を安心してご利用いただくための大切なお約束です。
          </p>
        </div>

        <div className="space-y-12 reveal" style={{ animationDelay: "0.1s" }}>
          {/* Terms Section */}
          <section className="glass rounded-[40px] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 border-b border-[var(--line)] pb-4">
              <Scale className="h-6 w-6 text-[var(--accent-strong)]" />
              <h2 className="text-2xl font-black text-[var(--ink)]">利用規約</h2>
            </div>
            
            <div className="space-y-8 text-[var(--ink-soft)] leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--ink)]">第1条（AI制作の特性と免責）</h3>
                <p>
                  1. 本サービスはAI（人工知能）技術を筆記具として用いた映像制作サービスです。AI生成物の特性上、キャラクターの細部や衣装、背景などにわずかな「ゆらぎ（非整合性）」が生じる場合がありますが、これらは本サービスの表現上の仕様であり、修正や返金の対象とはなりません。
                </p>
                <p>
                  2. 制作開始後の大幅な方向転換や、AIの技術的限界を超える過度な再現性の要求については、追加費用のご相談、またはお引き受けできない場合があります。
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--ink)]">第2条（権利の帰属と利用範囲）</h3>
                <p>
                  1. 納品した映像データの著作権（利用権）は、代金の完納をもって依頼者様に譲渡されます。
                </p>
                <p>
                  2. 制作者（STUDIO 玻瑠の杜 / 餡子）は、制作物の著作者人格権を保持します。自らのポートフォリオやSNS等で実績として公開する権利を有しますが、公開不可のオプションを選択された場合はこの限りではありません。
                </p>
                <p>
                  3. 納品物はYouTube等の配信プラットフォームやSNSでの利用を目的としています。公序良俗に反する目的、または反社会的な活動への利用は固く禁止します。
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--ink)]">第3条（素材の権利保証）</h3>
                <p>
                  1. 依頼者様が提供する音源、キャラクターデザイン、画像等の素材について、第三者の知的財産権を侵害していないことを依頼者様が保証するものとします。
                </p>
                <p>
                  2. 納品後に発生したAI技術に関連する法的トラブル（第三者からの著作権侵害の主張等）について、当方は一切の責任を負いかねます。
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--ink)]">第4条（キャンセル・修正）</h3>
                <p>
                  1. 各プランに定められた回数までは無料で修正を承ります。
                </p>
                <p>
                  2. 制作着手後の依頼者様都合によるキャンセルについては、進行状況に応じたキャンセル料が発生いたします。
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Section */}
          <section className="glass rounded-[40px] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 border-b border-[var(--line)] pb-4">
              <Lock className="h-6 w-6 text-[var(--sky-accent)]" />
              <h2 className="text-2xl font-black text-[var(--ink)]">プライバシーポリシー</h2>
            </div>
            
            <div className="space-y-8 text-[var(--ink-soft)] leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--ink)]">1. 個人情報の収集</h3>
                <p>
                  制作にあたり、お名前、メールアドレス、SNSアカウント情報（Discord等）、および制作の参考となる資料（音源・画像等）を収集いたします。
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--ink)]">2. 利用目的</h3>
                <p>
                  収集した個人情報は、以下の目的のみに使用し、適切に管理いたします。
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>映像の制作および納品</li>
                  <li>制作に関連する連絡およびご相談</li>
                  <li>アフターサポートの提供</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--ink)]">3. 第三者への提供</h3>
                <p>
                  法令に基づく場合を除き、依頼者様の同意を得ることなく個人情報を第三者に提供することはありません。
                </p>
              </div>
            </div>
          </section>

          {/* SCTA Section */}
          <section className="glass rounded-[40px] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 border-b border-[var(--line)] pb-4">
              <FileText className="h-6 w-6 text-[var(--leaf-accent)]" />
              <h2 className="text-2xl font-black text-[var(--ink)]">特定商取引法に基づく表記</h2>
            </div>
            
            <div className="space-y-6 text-[var(--ink-soft)] leading-relaxed">
              <dl className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                <dt className="font-bold text-[var(--ink)]">運営者 / 代表者</dt>
                <dd>STUDIO 玻瑠の杜 / 餡子（anko）</dd>

                <dt className="font-bold text-[var(--ink)]">所在地 / 電話番号</dt>
                <dd>
                  個人情報保護の観点から表示を控えておりますが、ご請求があった際には遅滞なく提供いたします。
                  <br />ご希望の場合はお問い合わせフォームよりご連絡ください。
                </dd>

                <dt className="font-bold text-[var(--ink)]">販売価格</dt>
                <dd>各プランに記載されている価格（消費税等を含む）に基づきます。</dd>

                <dt className="font-bold text-[var(--ink)]">代金の支払い時期</dt>
                <dd>制作開始前（前払い）を原則といたします。</dd>

                <dt className="font-bold text-[var(--ink)]">代金の支払い方法</dt>
                <dd>銀行振込（振込手数料は依頼者様のご負担となります）</dd>

                <dt className="font-bold text-[var(--ink)]">商品の引き渡し時期</dt>
                <dd>各プランの納期目安に基づき、個別の契約（相談）時に合意した期日までに納品いたします。</dd>

                <dt className="font-bold text-[var(--ink)]">返品・キャンセル</dt>
                <dd>
                  デジタルコンテンツおよびオーダーメイド役務の性質上、制作着手後の依頼者様都合による返品・返金には応じかねます。
                </dd>
              </dl>
            </div>
          </section>

          {/* Back Link */}
          <div className="text-center pt-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--muted)] hover:text-[var(--accent-strong)] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
