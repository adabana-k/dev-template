# Architecture

## 使用技術と構成
Node.js 24.x / npm、JavaScript ES Modules、Vite、ESLint、Node標準test runner。
ブラウザーUIは index.html と src/main.js、純粋なロジックは src/greeting.js に分離する。
Viteは開発サーバーと静的ビルドを担う。特定UIフレームワークに依存しない。

## フロントエンド
単一HTMLとCSS、DOMイベントによる最小構成。入力や環境変数の表示はtextContentを使用する。
VITE_APP_NAMEは任意の公開アプリ名。設定しない場合も日本語の既定名で動作する。

## バックエンド・DB・外部API・ファイルストレージ・認証
すべて未導入。アプリ要件を定義してから選定し、重要な決定は docs/decisions/ にADRを残す。
現状は外部API通信・データ永続化を行わない。

## データフロー
名前入力 → submit → createGreetingによる検証と整形 → textContentで日本語表示。
ソース → Vite build → dist/ → 選定後の静的配信先。
Issue → 作業ブランチ → Codex編集 → PR → GitHub Actions → 人間レビュー → main。

## 開発環境
CodespacesはDev ContainerのNode 24 Debian Bookwormイメージを使用する。
必須OSツールはベースイメージのGit/Bashを利用し、追加aptパッケージはない。
5173が開発、4173がビルド確認。Nodeは24系で揃え、依存の厳密な解決はpackage-lock.jsonで固定する。
Nodeパッチ版・OSイメージのdigestまでは固定していない。厳密固定が必要なら全環境を同時更新する。
Codex Cloudは独自コンテナーのためdevcontainer.jsonを自動適用する前提にしない。

## デプロイ
未選定。deploy.ymlは手動で検証済みdistをArtifact化する拡張用ワークフロー。
配信先・認証・保護環境・ロールバック方針を決め、承認後に配信ステップを追加する。
CIにはcontents: readのみ付与する。
