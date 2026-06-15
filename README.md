# SLIDE UNIVERSE

伝わる構造と、惹き込む世界観をつくる。

NotebookLM に入れた資料から、**伝わる構造 × 惹き込む世界観 × 破綻しない品質ルール**を同時に設計した高密度プロンプトを生成するメーカー。

- 6つの設問に答え、26の世界観プリセットから1つ選ぶだけ
- Prompt Compiler が NotebookLM 向けの高密度プロンプトを自動合成
- 出力をコピーして NotebookLM に貼り付け

## 開発

```bash
npm install
npm run dev      # 開発サーバ
npm run build    # 本番ビルド（dist/）
```

React 18 + TypeScript + Vite。クライアント完結の静的SPA。

## デプロイ

`main` への push で GitHub Actions が自動ビルド＆ GitHub Pages へ公開（`.github/workflows/deploy.yml`）。
公開URL: https://slideuniverse.teklife.jp
