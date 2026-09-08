# ADR-0001: 最小のJavaScript構成
Status: Accepted
Date: 2026-09-07

## Context
既存コード・技術スタックはなく、利用先アプリの種類も未指定。共通コマンドとクラウド再現性が必要。

## Decision
Node 24、JavaScript、Vite、ESLint、Node標準テストを採用する。
Viteはブラウザー開発サーバーと静的成果物の生成に、ESLintは静的検査に必要。
標準Nodeだけではこれらを一貫した少量の設定で提供できないため開発依存として導入する。
テストはNode標準を使い、React/DB/認証等はアプリ要件が決まるまで導入しない。

## Consequences
小さな依存構成で開始できる。一方、複雑な画面・サーバー機能・型検査が必要になれば再評価する。
Nodeはメジャー版統一、npm依存はlockfile固定。クラウド上の実証は利用先リポジトリで行う。
