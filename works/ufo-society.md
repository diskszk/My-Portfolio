---
name: "UFO society公式Webサイト(未公開)"
image: "/images/ufo-society.png"
description: "友人が所属しているバンド「UFO society」の公式Webサイト"
pageUrl: "./works/[id]"
path: ""
siteUrl: "https://diskszk.github.io/ufo-society1974/albums.html#/"
gitRepo: "https://github.com/diskszk/ufo-society1974"
date: 2020-12
---

## アプリの説明

友人が加入しているバンド「UFO society」の公式サイト。
元々はメンバー間で HTML を操作することなく Web 経由で楽曲の歌詞や音声ファイルを投稿する為に作成した管理アプリに合わせて、リソースを使う為に改修しました。

## 開発開始時期

2020 年 12 月頃

## 作成した目的

バンドメンバー間で HTML を操作することなく Web 経由で楽曲の歌詞や音声ファイルを投稿する為に作成した管理アプリに合わせて、リソースを使う為に改修しました。

## 使用した技術

HTML / CSS / TypeScript /
React / Redux / Firebase / Firestore /
Material-UI / GitHub / webpack

## 開発方法

元々バンドメンバーが作成した HTML,CSS のみの静的サイトに機能追加する形で開発しました。
create-react-app を使ってプロジェクト作成ができなかったので webpack を適宜手書きしました。

## 機能

### ホスティング

- GitHub Pages(仮デプロイ)
- firebase hosting(準備が整い次第本格的に公開する)

### データベース

同じく Google 提供の Firebase より、Firestore を利用し、管理アプリで追加したリソースを参照しています。

## Web サイトの URL

https://diskszk.github.io/ufo-society1974/albums.html#/

## GitHub リポジトリの URL

https://github.com/diskszk/ufo-society1974
