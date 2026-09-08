# 導入・開発フロー

## 1. GitHubに登録
GitHubで空のリポジトリを作成し、所有者・公開範囲を選択する。
以下のOWNER/REPOは実際の値に置き換える。すでにGit管理されている場合はinitせず、既存remoteとブランチを確認する。

```bash
git init -b main
git add .
git commit -m "chore: initialize development template"
git remote add origin https://github.com/OWNER/REPO.git
git push -u origin main
```

最初の空リポジトリ登録後、機能開発は必ず作業ブランチとPR経由にする。
Template repositoryを有効化し、複製先ではdocs/product.mdとpackage.jsonを編集する。

## 2. Codespaces
Code → Codespacesから作成する。作成ログでnpm ci成功を確認する。
`node --version`が24系であることを確認し、`npm run check`、`npm run dev`を実行する。
Portsの5173をブラウザーで開き、ポートの公開範囲がPrivateであることを確認する。
別のPCで同じGitHubアカウントにログインし、同じCodespaceを再開して変更を確認する。
未コミット作業はそのCodespace内にある。別のCodespaceを作った場合はGit経由で変更を取得する。
利用しないCodespaceは停止する。削除前に必要な作業をpushする。

## 3. Codex Cloud
[設定手順](codex-cloud.md)に従い環境登録とsetupを実行する。
[テスト用Issue](examples/first-issue.md)をGitHub Issueとして登録してCodexへ渡す。
GitHub連携がIssue本文を取得できない場合は、本文とIssue番号をプロンプトに添付する。

## 4. CIと保護設定
最初のPRでCIを実行し、Linux/Windowsの `Test, lint, build` が成功することを確認する。
GitHubのRulesetsまたはBranch protectionでmainへのPR必須・上記ステータスチェック必須を設定する。
レビュー承認数は体制に合わせる。個人開発でも差分を確認してからマージする。
機密値をワークフローやIssueへ記入しない。

## 5. 日常のIssue運用
New issueの「機能追加」か「不具合」を使用する。要件ID、背景、非対象、完了条件を明示する。
1つのIssueを小さな変更単位にし、作業ブランチは feature/*、fix/*、refactor/*、docs/* とする。
PRにCloses #番号を記入し、テスト結果とドキュメント更新を確認する。
AIは仕様調査・実装・テスト・提案、人間は目的・優先順位・UX・最終仕様・レビューを担当する。

## 6. 受け入れ確認
- [ ] GitHubリポジトリが存在し、必要なメンバーからアクセスできる
- [ ] Codespacesで起動し、別端末から同じ環境を再開できる
- [ ] AGENTS.mdと5つの基本仕様書が存在する
- [ ] test / lint / buildがローカル、Codespaces、Codex Cloudで成功する
- [ ] Issue/PRテンプレートがGitHub画面に表示される
- [ ] Codexが日本語Issueからコード変更とテストを実行できる
- [ ] PRが作成され、GitHub Actionsが成功する
- [ ] 人間がレビューしてマージできる

未実施の項目は完了扱いにせず、docs/verification.mdに日付・PR・実行URLを記録する。
