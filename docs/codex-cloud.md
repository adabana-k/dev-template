# Codex Cloud設定

これは環境画面で設定するための手順書です。ファイル配置だけでGitHub連携や環境登録が完了するものではありません。

## 設定値
1. GitHub連携で対象リポジトリへのアクセスを許可し、Codex Cloudの環境を作成する。
2. 環境のランタイム設定でNode.js 24系を選択する。スクリプトでも24系を検査する。
3. Setup scriptに `bash scripts/codex-setup.sh` を指定する。
4. Maintenance scriptにも `bash scripts/codex-setup.sh` を指定する。キャッシュ再開時にlockfileの変更を反映する。
5. 環境変数は任意で `TZ=Asia/Tokyo`、`VITE_APP_NAME=アプリ開発テンプレート` を設定する。
6. エージェントのネットワークアクセスは初期サンプルのテストには不要。依存の追加が必要な場合に限定的に許可する。
7. 環境のテスト実行でセットアップが完了することを確認する。

setupはNode確認 → npm ci --include=dev → npm run setupを実行する。
セットアップ時にはnpm公式レジストリ `registry.npmjs.org` へのアクセスが必要。
レジストリ障害や組織プロキシの制限は実行ログで確認する。通常の検証は外部APIを使わない。

## 秘密情報と環境変数
このテンプレートにAPIキーは不要。必要になった場合は環境の秘密情報管理に保存し、Gitへ書き込まない。
CodexのSecretsはセットアップ時のみ利用可能。エージェント実行時に存在する前提にしない。
VITE_接頭辞の値はブラウザーに含まれるため公開値に限定する。
setupのexportは別セッションのエージェントには引き継がれないため、永続設定は環境画面を使用する。

## 作業と検証
AGENTS.mdのルールに沿ってIssueを実装させ、以下の成功を確認する。

```bash
npm run test
npm run lint
npm run build
```

差分からPRを作成し、GitHub Actionsの成功と人間レビューを経てマージする。
Dev ContainerとCodex Cloudは別環境。Nodeとnpmコマンドを揃え、双方の起動を個別に確認する。

設定内容は2026-09-07に確認した[OpenAI公式Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)に基づく。
