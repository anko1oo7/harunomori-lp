"use client";

import React, { useState } from "react";
import { Copy, Download, Plus, Trash2, Wand2, Sparkles, Image as ImageIcon, UserCircle, Zap, Palette, Camera } from "lucide-react";
import jsYaml from "js-yaml";
import promptLibrary from "@/lib/prompt_library.json";

interface TimelineItem {
  id: string;
  lyrics: string;
  scene: string;
  action: string;
  camera: string;
}

export default function MVGeneratorPage() {
  const [songTitle, setSongTitle] = useState("");
  const [stylePrompt, setStylePrompt] = useState("2D anime illustration, mainstream modern Japanese anime key visual style, clean cel shading, sharp lineart, bright and crisp, cinematic lighting");
  const [charDescription, setCharDescription] = useState("");
  const [parameters, setParameters] = useState("--ar 16:9 --niji 7 --stylize 250");
  const [timeline, setTimeline] = useState<TimelineItem[]>([
    { id: "1", lyrics: "", scene: "", action: "", camera: "" }
  ]);

  const addSection = () => {
    setTimeline([
      ...timeline,
      { id: Date.now().toString(), lyrics: "", scene: "", action: "", camera: "" }
    ]);
  };

  const removeSection = (id: string) => {
    if (timeline.length > 1) {
      setTimeline(timeline.filter(item => item.id !== id));
    }
  };

  const updateSection = (id: string, field: keyof TimelineItem, value: string) => {
    setTimeline(timeline.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const generatePrompt = (item: TimelineItem) => {
    const parts = [
      stylePrompt,
      charDescription,
      item.scene,
      item.action,
      item.camera
    ].map(p => p.trim()).filter(p => p !== "");
    
    let basePrompt = parts.join(", ");
    let finalPrompt = `${basePrompt} ${parameters}`.trim().replace(/\s+/g, " ");
    
    return finalPrompt;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("コピーしました！");
  };

  const copyAllPrompts = () => {
    const allText = timeline.map((item, index) => {
      return `Section ${index + 1}\nLyrics: ${item.lyrics}\nPrompt: ${generatePrompt(item)}\n`;
    }).join("\n");
    copyToClipboard(allText);
  };

  const suggestPrompts = (id: string) => {
    const item = timeline.find(it => it.id === id);
    if (!item) return;

    let suggestedScene = "";
    let suggestedAction = "";
    let suggestedCamera = "";

    // 歌詞キーワードマッチング
    const keywords = Object.keys(promptLibrary.keywords_map);
    const foundKeyword = keywords.find(kw => item.lyrics.includes(kw));

    if (foundKeyword) {
      const map = (promptLibrary.keywords_map as any)[foundKeyword];
      suggestedScene = map.scene;
      suggestedAction = map.action;
      suggestedCamera = map.camera;
    } else {
      // ランダム提案
      const rand = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
      suggestedScene = `${rand(promptLibrary.camera_distance)}, ${rand(promptLibrary.lighting)}`;
      suggestedAction = rand(promptLibrary.expressions.happy); // Default vibe
      suggestedCamera = `${rand(promptLibrary.camera_angles)}, ${rand(promptLibrary.compositions)}`;
    }

    setTimeline(timeline.map(it => it.id === id ? {
      ...it,
      scene: it.scene || suggestedScene,
      action: it.action || suggestedAction,
      camera: it.camera || suggestedCamera
    } : it));
  };

  const applyStylePreset = (preset: string) => {
    const presets: Record<string, string> = {
      "Cinematic": "2D anime illustration, high-end cinematic production, deep atmosphere, volumetric lighting, sharp lines, cinematic colors, masterpiece quality, Ufotable style",
      "Cyberpunk": "2D anime illustration, cyberpunk aesthetic, neon lights, rainy night streets, high-tech vibe, vibrant pink and blue lighting, futuristic city background",
      "Watercolor": "2D anime illustration, soft watercolor painting style, gentle brush strokes, pastel colors, airy atmosphere, nostalgic vibe, hand-drawn texture",
      "Retro 90s": "90s Japanese anime style, hand-drawn cell animation look, grainy texture, retro color palette, soft focus filter, nostalgic atmosphere",
      "Fantasy": "Epic fantasy anime style, magical atmosphere, glowing particles, medieval environment, detailed landscape, ethereal lighting"
    };
    if (presets[preset]) setStylePrompt(presets[preset]);
  };

  // YAML保存（生成後のデータを出力）
  const downloadYAML = () => {
    const data = {
      song_title: songTitle,
      common_settings: {
        style_prompt: stylePrompt,
        char_description: charDescription,
        parameters: parameters,
      },
      timeline: timeline.map(({ lyrics, scene, action, camera }) => ({
        lyrics, scene, action, camera
      }))
    };
    
    const yamlData = jsYaml.dump(data);
    const blob = new Blob([yamlData], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${songTitle || "mv_composition"}.yaml`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-8 font-sans transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              niji journey 7 MV Generator
            </h1>
            <p className="text-gray-400 flex items-center gap-2">
              <Sparkles size={16} className="text-indigo-400" />
              プロジェクト単位で構成を管理・生成するプロフェッショナルツール
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={downloadYAML}
              className="flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-700"
            >
              <Download size={18} />
              YAML保存
            </button>
            <button 
              onClick={copyAllPrompts}
              className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-lg shadow-indigo-500/20"
            >
              <Copy size={18} />
              全プロンプトをコピー
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-8">
            <section className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-6 text-indigo-400 border-b border-gray-800 pb-4">
                <Sparkles size={20} />
                <h2 className="text-xl font-bold">プロジェクト共通設定</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">曲名 / プロジェクト名</label>
                  <input 
                    type="text" 
                    value={songTitle}
                    onChange={(e) => setSongTitle(e.target.value)}
                    placeholder="例: 夏の終わり"
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <ImageIcon size={16} /> 共通スタイルプロンプト
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Cinematic", "Cyberpunk", "Watercolor", "Retro 90s", "Fantasy"].map(preset => (
                      <button
                        key={preset}
                        onClick={() => applyStylePreset(preset)}
                        className="text-[10px] px-3 py-1 bg-indigo-900/30 hover:bg-indigo-600 border border-indigo-500/30 rounded-full transition-all text-indigo-300 hover:text-white"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                  <textarea 
                    value={stylePrompt}
                    onChange={(e) => setStylePrompt(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all h-24 text-sm"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-sm font-medium text-pink-400 mb-2 flex items-center gap-2 font-bold">
                    <UserCircle size={16} /> キャラクター詳細描写（niji 7の一貫性の鍵）
                  </label>
                  <textarea 
                    value={charDescription}
                    onChange={(e) => setCharDescription(e.target.value)}
                    placeholder="例: 1girl, young woman, blonde long hair, blue eyes, wearing a white summer dress..."
                    className="w-full bg-gray-950 border border-pink-900/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none transition-all h-32 text-sm shadow-inner"
                  />
                  <div className="absolute top-0 right-0 text-[10px] text-pink-500/50 uppercase tracking-widest font-bold bg-pink-500/10 px-2 py-1 rounded">
                    CRITICAL FOR CONSISTENCY
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">共通パラメータ</label>
                  <input 
                    type="text" 
                    value={parameters}
                    onChange={(e) => setParameters(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                <div className="flex items-center gap-2 text-pink-400">
                  <Wand2 size={20} />
                  <h2 className="text-xl font-bold">楽曲構成ライン</h2>
                </div>
                <button 
                  onClick={addSection}
                  className="p-2 bg-pink-600/20 hover:bg-pink-600/40 text-pink-400 rounded-full transition-all"
                >
                  <Plus size={24} />
                </button>
              </div>
              
              <div className="space-y-6 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar p-2">
                {timeline.map((item, index) => (
                  <div key={item.id} className="relative bg-gray-950 p-6 rounded-2xl border border-gray-800 group transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
                    <div className="absolute -left-3 top-6 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg shadow-indigo-500/40 z-10">
                      {index + 1}
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button 
                        onClick={() => suggestPrompts(item.id)}
                        className="p-2 text-indigo-400 hover:text-white transition-all hover:bg-indigo-500/10 rounded-lg group/btn flex items-center gap-1"
                        title="AI提案 (Magic Wand)"
                      >
                        <Zap size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/btn:opacity-100 transition-all">Suggest</span>
                      </button>
                      <button 
                        onClick={() => removeSection(item.id)}
                        className="p-2 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-400/10 rounded-lg"
                        title="セクション削除"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="space-y-6">
                      <div className="relative pt-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-black mb-2 block">Lyrics (歌詞パート)</label>
                        <input 
                          type="text" 
                          value={item.lyrics}
                          onChange={(e) => updateSection(item.id, "lyrics", e.target.value)}
                          placeholder="ここを歌う歌詞..."
                          className="w-full bg-transparent border-b-2 border-gray-800 py-2 font-bold text-xl focus:border-indigo-500 outline-none transition-all placeholder:text-gray-700"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                            <Sparkles size={12} className="text-purple-400" /> Scene
                          </label>
                          <textarea 
                            value={item.scene}
                            onChange={(e) => updateSection(item.id, "scene", e.target.value)}
                            placeholder="情景描写..."
                            className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none transition-all h-20 resize-none hover:bg-gray-900"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                            <Plus size={12} className="text-pink-400" /> Action
                          </label>
                          <textarea 
                            value={item.action}
                            onChange={(e) => updateSection(item.id, "action", e.target.value)}
                            placeholder="キャラクターの動作..."
                            className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none transition-all h-20 resize-none hover:bg-gray-900"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                            <Wand2 size={12} className="text-indigo-400" /> Camera
                          </label>
                          <textarea 
                            value={item.camera}
                            onChange={(e) => updateSection(item.id, "camera", e.target.value)}
                            placeholder="アングル・動き..."
                            className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-indigo-500 outline-none transition-all h-20 resize-none hover:bg-gray-900"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Preview Section */}
          <div className="sticky top-8 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Copy size={24} className="text-indigo-400" />
              プロンプトプレビュー
            </h2>
            <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
              {timeline.map((item, index) => {
                const prompt = generatePrompt(item);
                return (
                  <div key={item.id} className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-indigo-400 font-mono text-sm"># SECTION {index+1}</span>
                      <button 
                        onClick={() => copyToClipboard(prompt)}
                        className="text-gray-500 hover:text-white transition-all"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <p className="text-sm italic text-gray-400 mb-4">"{item.lyrics || "(歌詞未入力)"}"</p>
                    <div className="bg-black/40 p-4 rounded-lg font-mono text-xs leading-relaxed text-indigo-100 whitespace-pre-wrap break-all border border-indigo-900/20">
                      {prompt}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .transition-all {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
