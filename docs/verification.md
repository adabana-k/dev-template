# 構築・検証記録

実施日: 2026-09-07

## 作成内容
既存フォルダーは空で、Gitリポジトリ・既存ソースはなかった。既存ファイルの修正はなし。
以下を新規作成した。
- AGENTS.md / README.md
- docs/product.md / requirements.md / architecture.md / features.md / roadmap.md
- docs/decisions/、導入手順、Codex Cloud設定、機能提案プロンプト、テスト用Issue
- src/、tests/、index.html
- package.json / package-lock.json / eslint.config.js / vite.config.js
- .nvmrc / .npmrc / .env.example / .gitignore / .gitattributes / .editorconfig
- .devcontainer/devcontainer.json
- .github/ISSUE_TEMPLATE/ / pull_request_template.md / workflows/test.yml / deploy.yml
- scripts/のNode確認・setup・Codex Cloudセットアップ

## 採用構成
Node.js 24系、npm、JavaScript、Vite、ESLint、Node標準テスト。
今回解決した開発依存はVite 8.2.2 / ESLint 10.10.0 / @eslint/js 10.0.1 / globals 17.12.0。
厳密な依存解決はpackage-lock.jsonに記録。Nodeパッチ版とOSイメージdigestは未固定。

## ローカル実測
Windows / Node 24.19.0 / npm 12.0.2。
端末にnpmがなかったため、npm公式配布を一時フォルダーへ取得して検証した。
一時的なnpmランチャーの配置不整合を修正後、以下が成功した。端末固有パスはテンプレート設定へ含めていない。
配布ZIP作成中にWindowsのファイルロックで開発サーバーの監視エラーが発生したため、
Viteの監視対象から.local-toolsとZIPを除外し、Lint・Build・開発サーバーを再確認した。

| 項目 | 結果 |
|---|---|
| npm install | 成功、lockfile生成 |
| npm ci --include=dev | 保存済みキャッシュを用いたoffline再インストール成功 |
| npm run setup | .env生成、再実行で既存.env維持 |
| npm run test | 5件成功、失敗0 |
| npm run lint | 成功、警告0 |
| npm run build | 成功、dist/index.htmlとJS/CSSを生成 |
| npm run check | test → lint → buildの連続実行成功 |
| npm run dev | 5173起動、HTTP 200 |
| ブラウザー操作 | Headless Microsoft Edgeで日本語あいさつ、空欄、Enter操作を確認 |
| 外部入力の表示 | HTML文字列が要素として実行されず文字として表示されることを確認 |
| モバイル幅 | 375px幅で横方向のはみ出しなし、スクリーンショット確認 |
| ブラウザーエラー | pageerror 0件 |
| Dev Container JSON | JSON構文解析成功 |

単体テストは日本語入力、空欄・空白・省略、前後空白除去、40/41文字の境界、型不正を確認する。
ブラウザー検証はこの構築時の追加確認であり、テンプレートのCIは単体テスト・Lint・Buildを実行する。

## 未検証・未設定
- GitHubリポジトリの作成とTemplate repository設定、remote登録。
- Codespaces起動と別端末からの再開。
- Dockerエンジンが起動しておらず、ローカルDev Containerの実起動は未検証。
- Codex CloudのGitHub連携、環境登録、Linux上でのsetup/maintenance実行。
- GitHub Actionsの実行。YAMLは記述内容を確認したが専用バリデーターでは未検証。
- テスト用Issueの実登録、Codex実装、PR作成、人間レビュー、マージ。
- 本番配信先、定期機能提案の実行基盤。deploy.ymlは配信を行わない。

## 次の作業
docs/getting-started.mdに従ってGitHubへ登録し、CodespacesとCodex Cloudを接続する。
docs/examples/first-issue.mdをIssueに登録して開発ループを実証する。
各クラウド検証の実行日、Issue/PR番号、Actions実行URLをこの文書へ追記する。
初期環境構築の全項目を完了したという主張は、これらの受け入れ確認後に行う。
