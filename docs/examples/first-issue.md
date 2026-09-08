# テスト用Issue下書き: あいさつを初期状態に戻す

GitHubで実際のIssueとして登録し、Codex Cloudから実装させるための未実装課題。
既存のあいさつ機能を使って追加変更の開発ループを検証する。

## 概要・背景
初期画面に「クリア」ボタンを追加し、繰り返し入力できるようにする。
目的は日本語Issue → 実装 → PR → CI → 人間レビューの実証。

## 要件
- FR-006（このIssue着手時にrequirements.mdへ追加）: クリアで名前入力を空欄に戻す。
- 結果表示を「準備ができました。」へ戻す。
- 名前入力欄へフォーカスを戻す。
- キーボードから操作できる。

## 非対象
永続化、ログイン、外部API、全体デザイン変更。

## Acceptance Criteria
- [ ] 名前ありのあいさつ表示後、クリアで入力と結果が初期化される
- [ ] 初期状態でクリアしてもエラーにならない
- [ ] クリア後に別の名前であいさつできる
- [ ] 必要な動作テストを追加する
- [ ] npm run test / lint / build が成功する
- [ ] GitHub Actionsが成功し、人間がPRをレビューする

## Documentation
docs/requirements.md、docs/features.md、docs/verification.mdを更新する。
