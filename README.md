# Codex アプリ開発テンプレート

GitHubを正本とし、日本語Issue → Codex実装 → テスト → PR → CI → 人間レビューを回すための最小構成です。
Node.js 24.x、JavaScript、Vite、ESLint、Node標準テストを採用しています。
実際のプロダクトは未定義です。最初に `docs/product.md` を編集してください。

## 起動
Node.js 24.x（npm同梱）とGitを用意し、ルートで実行します。

```bash
npm ci --include=dev
npm run setup
npm run dev
```

ブラウザーで http://localhost:5173 を開きます。名前を入力すると日本語のあいさつを表示します。
`.env` は任意で、setupは既存ファイルを上書きしません。秘密情報は不要です。

| コマンド | 用途 |
|---|---|
| `npm install` | 依存追加・更新時。lockfileをコミットする |
| `npm ci --include=dev` | lockfileから再現インストール |
| `npm run dev` | 開発サーバー（5173） |
| `npm run test` | 単体テスト |
| `npm run lint` | ESLint |
| `npm run build` | dist/にビルド |
| `npm run check` | test → lint → build |
| `npm run preview` | ビルド結果の確認（4173） |

## テンプレートとして利用
1. このフォルダーの内容を新規GitHubリポジトリへ登録します。`.env`、node_modules、distは除外します。
2. GitHubのリポジトリ設定でTemplate repositoryを有効にすると、次回からUse this templateで複製できます。
3. package.jsonのname、docs/product.mdの利用先欄、requirementsとroadmapをプロダクトに合わせて変更します。
4. [導入手順](docs/getting-started.md)に沿ってCodespaces、Codex Cloud、ブランチ保護を設定します。

この配布物はローカルのテンプレートです。GitHub作成、クラウド接続、実際のPR・CI・マージの実証は別途必要です。

## Codespaces
GitHubで Code → Codespaces → Create codespace を選択します。
コンテナー作成時に依存関係と.envが準備されます。ターミナルで `npm run dev` を実行し、Portsの5173を開きます。
別端末では同じGitHubアカウントから同じCodespaceを再開します。別Codespace間の同期はcommit/push/pullで行います。
同一作業ブランチを複数端末から同時に編集しない運用にします。

## CodexとIssue運用
New issueから日本語の「機能追加」または「不具合」を作成し、要件IDと完了条件を記入します。
Codex Cloudの設定は [専用手順](docs/codex-cloud.md) を参照してください。

```text
Issue #XXを実装してください。
AGENTS.mdとdocs/product.md、requirements.md、features.md、architecture.mdを確認し、
既存コードを調査して必要最小限の変更で実装してください。
npm run test、npm run lint、npm run buildを実行し、必要なドキュメントを更新してください。
仕様の不整合や未検証事項は報告し、関連Issueを記載したPRを用意してください。
```

[テスト用Issue](docs/examples/first-issue.md) と [機能提案プロンプト](docs/prompts/feature-proposal.md) も用意しています。
PRのCIが成功し、人間がレビューしてからマージします。

## 構成
- src/、tests/: 最小アプリとテスト
- docs/: product、requirements、architecture、features、roadmap、ADR、導入・運用手順
- AGENTS.md: AI向け恒久ルール
- .devcontainer/: Codespaces / Dev Container
- .github/: Issue、PRテンプレート、CI、将来のDeploy拡張口
- scripts/: Nodeバージョン確認、環境変数準備、Codex Cloudセットアップ

バックエンド・DB・認証・ストレージ・本番配信先は未選定です。
deploy.ymlは手動の検証・成果物作成のみで、本番への配信は行いません。
検証結果とクラウド側の未完了事項は [検証記録](docs/verification.md) を参照してください。
