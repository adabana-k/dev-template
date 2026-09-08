# Functional Requirements

| ID | 要件 | 確認方法 |
|---|---|---|
| FR-001 | 開発サーバーで日本語の初期画面を表示する | devとブラウザー |
| FR-002 | 名前を入力するとあいさつする。空欄可、前後空白除去、40文字以内（JS文字列長） | greeting.test.js、手動UI |
| FR-003 | Issue・PRテンプレートから要件と検証内容を記録できる | GitHubで作成 |
| FR-004 | Codex Cloudで依存導入・編集・test/lint/buildを実行できる | Cloud接続後に実証 |
| FR-005 | Codespacesを異なる端末から再開できる | 2端末で実証 |

# Non Functional Requirements

| ID | 要件 | 確認方法 |
|---|---|---|
| NFR-001 | Node 24系とlockfileを使用し同じnpmコマンドで検証する | ローカル/CI/Cloud |
| NFR-002 | PRとmain pushでtest → lint → buildを実行する | GitHub Actions |
| NFR-003 | 秘密情報をGit管理しない。ブラウザー変数に秘密を入れない | .gitignoreとレビュー |
| NFR-004 | フォームはラベルとキーボード操作、読み上げ通知に対応する | 手動UI |
| NFR-005 | 仕様・実装状況・設計判断をMarkdownで管理する | docsとADRのレビュー |

利用先アプリの要件は、受け入れ条件付きで新しいIDとして追加する。
