# LP更新・自動デプロイワークフロー (LP Update & Auto-Deploy Workflow)

このスキルは、**STUDIO 玻瑠の杜** のランディングページ（LP）を更新し、GitHub経由でCloudflare Pagesに自動デプロイするための手順を定義します。

## 対象プロジェクト
- **ディレクトリ**: `apps/mv-lp`
- **デプロイ先**: [https://harunomori-lp.pages.dev](https://harunomori-lp.pages.dev)
- **GitHubリポジトリ**: `https://github.com/anko1oo7/harunomori-lp.git`

## 実行フロー

### 1. 同期 (Sync)
修正を開始する前に、必ずリモートリポジトリの最新状態を取り込みます。
```powershell
git pull origin main
```

### 2. コード修正 (Editing)
ユーザーの依頼内容（テキスト変更、ポートフォリオ追加、デザイン調整等）に基づき、`apps/mv-lp` 内のファイルを適切に修正します。

### 3. コミットとプッシュ (Commit & Push)
修正が完了し、ユーザーの確認が得られたら（または一括で任された場合）、以下の手順でGitHubに反映します。コミットメッセージは日本語で分かりやすく記述してください。

```powershell
git add .
git commit -m "update: [修正内容の概要]"
git push origin main
```

### 4. 公開確認 (Verification)
プッシュ後、Cloudflare Pagesの自動ビルドが開始されます（通常1〜3分）。ユーザーに以下の点を確認するよう伝えます：
- 公開URLでの反映状況
- モバイル表示などの崩れがないか

## 注意事項
- **APIキーの秘匿**: `.env` ファイルを決してコミットに含めないこと（`.gitignore` で除外済みであることを常に確認）。
- **静的書き出し**: このプロジェクトは `output: 'export'` 設定のため、Cloudflare側の「Build output directory」が `out` に設定されている必要があります。
- **商用利用**: Cloudflare Pagesは商用利用可能な無料枠で運用されています。
