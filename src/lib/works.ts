export interface Work {
  id: string;
  title: string;
  embedId: string;
  category: string;
  categoryStyle: string;
  tags: string[];
  description: string;
}

export const works: Work[] = [
  {
    id: "maybe",
    title: "Maybe - Full animation Ver. High-Speed GO Million (feat. XXX)",
    embedId: "f-_RxbNK8lg",
    category: "フル尺MV",
    categoryStyle: "var(--accent-strong)",
    tags: ["1キャラ（キャラデザ含む）", "雰囲気：ロック、疾走感", "おまかせ制作"],
    description: "制作指針として「ロック」「疾走感」というキーワードとキャラクターの基本イメージをいただき、それ以外の構成や演出はすべて「おまかせ」で制作を担当しました。AIによる背景生成と、ダイナミックなキャラクターアニメーションを楽曲のスピード感に合わせて統合。一人のクリエイターとしての感性を注ぎ込み、楽曲の世界観をフルアニメーションで完遂させた作品です。",
  },
  {
    id: "sakuya",
    title: "咲耶 - 『出現』(Sakuya - L' Apparition)",
    embedId: "hmSF1UrEovs",
    category: "フル尺MV",
    categoryStyle: "var(--sky-accent)",
    tags: ["キャラリデザイン", "再解釈：ギュスターヴ・モロー", "おまかせ・数回修正"],
    description: "既存のキャラクターを楽曲の象徴的な世界観に合わせてリデザイン。ギュスターヴ・モローの傑作『出現』をインスピレーションの源泉として共有いただき、その退廃的で幻想的な空気感を現代のAI技術で再解釈しました。「おまかせ」の信頼を軸に、細部への数回のこだわりを経て完成。アーティストの持つ哲学を、一枚の絵画から一本のアニメーションへと昇華させた作品です。",
  },
  {
    id: "mominoki",
    title: "もみの木とひかりのうた - Harufloria",
    embedId: "ix0H8ERAhz0",
    category: "ローコストMV",
    categoryStyle: "var(--leaf-accent)",
    tags: ["自主制作作品", "ローコストMV作例（〜60秒）", "3人歌唱演出", "制作期間：3日〜1週間程度"],
    description: "クリスマス用に制作した楽曲に映像を付与した、短尺のローコストMVの作例です。3人のキャラクターが楽しげに合唱しているような演出のサンプルとして制作しました。短期間での制作ながら、楽曲の温かい雰囲気を視覚的に補完する構成となっています。",
  },
  {
    id: "soshun",
    title: "【short Anime MV】 早春の月冠 - Harufloria",
    embedId: "RcZ0UJSpADo",
    category: "ローコストMV",
    categoryStyle: "var(--sakura-accent)",
    tags: ["自主制作作品", "ローコストMV作例（〜60秒）", "AI動画ツール活用", "制作期間：3日〜1週間程度"],
    description: "「早春の月冠」をテーマにした、自主制作のショートアニメMVです。Nano BananaやKlingといった最新のAIツールを駆使し、低予算・短期間ながらも幻想的で情緒豊かな世界観を表現した作例です。AIならではの緻密な描写とアニメーションを融合させ、楽曲の持つ繊細な雰囲気を視覚的に昇華させました。",
  },
];
