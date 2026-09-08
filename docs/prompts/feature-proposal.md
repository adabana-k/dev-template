# 機能提案プロンプト

以下をCodexに渡す。初期段階は提案とIssue下書きのみ。自動実行・Issue公開は未設定。

```text
現在のプロジェクト状態を分析してください。
AGENTS.md、docs/product.md、requirements.md、features.md、roadmap.md、architecture.md、
docs/decisions/、現在のコードとテストを確認してください。
GitHubの未完了Issue、最近マージされたPR、CI結果、技術的負債も確認してください。
アクセスできない情報は未取得と明記し、実施していない検証を成功扱いにしないでください。
利用先のProduct Goalが未定義なら、その不足を報告し、勝手にアプリ分野を決めないでください。

次に実装する価値の高い候補を3〜5件提案してください。
実装済み、既存Issueと重複、目的と無関係、技術的な興味だけの機能は除外してください。
各候補に根拠となるファイル・要件ID・Issue/PRを記載し、以下を5段階で評価してください。
- User Value、Product Fit、Expected Usage Frequency: 5が高い
- Development Cost、Technical Risk: 5が重い
保守コストと現在のフェーズ、不確実性も示してください。
順位を付け、最優先候補を概要、背景、要件、非対象、受け入れ条件、
ドキュメント更新対象を含む日本語Issueの下書きにしてください。
提案と下書きを返し、人間の選択を待ってください。
```

将来の定期実行は、この入力収集と提案生成を独立した処理として追加する。
スケジューラー、API認証、予算、重複検知、通知先は未選定。詳細はroadmapを参照。
