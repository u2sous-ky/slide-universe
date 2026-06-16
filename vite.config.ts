import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages はレスポンスヘッダを設定できないため、本番ビルド時のみ CSP を <meta> で注入する。
// dev では Vite が inline スクリプト/HMR を使うため注入しない（apply: 'build'）。
// GTM(GTM-KT2FHLQQ) / GA4 を許可。inlineブートストラップのため script-src に 'unsafe-inline'。
// 許可は Google の計測ドメインのみに限定し、それ以外は 'self' を維持する。
const CSP =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; " +
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
  'font-src https://fonts.gstatic.com; ' +
  "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com; " +
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com; " +
  'frame-src https://www.googletagmanager.com; ' +
  "base-uri 'self'; " +
  "form-action 'none'; " +
  "object-src 'none'"

function cspPlugin(): Plugin {
  return {
    name: 'inject-csp',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        '</title>',
        `</title>\n    <meta http-equiv="Content-Security-Policy" content="${CSP}" />`,
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), cspPlugin()],
})
