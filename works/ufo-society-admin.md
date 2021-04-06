---
name: "UFO society管理アプリ"
image: "/images/ufo-society-admin.png"
description: "友人が所属しているバンド「UFO society」のWebサイト管理アプリ"
pageUrl: "./works/[id]"
path: ""
siteUrl: "https://ufo-society1974admin.web.app/"
gitRepo: "https://github.com/diskszk/ufo-society1974-admin"
date: 2020-11
---

## アプリの説明

友人が参加している音楽バンドの Web サイトへの機能追加として「自分たちの楽曲を Web サイト上で聴いてもらいたい」、「楽曲の歌詞を Web サイト上で閲覧できるようにしたい」との要望を受け、また、Web サイトの開発者が都合により Web サイトの保守開発ができなくなったことを受け、Web サイトを運用する音楽バンドのメンバーがソースコードを直接操作する事なく、曲のアップロードと歌詞の作成・編集が行えるように必要なデータをサーバ上にあげ、そのデータを Web サイトで参照できるようにするためにアプリの作成を行いました。

## 開発開始時期

2020 年 11 月頃

## 作成した目的

バンドメンバー間で HTML を操作することなく Web 経由で楽曲の歌詞や音声ファイルを投稿できるようにする為に開発しました。

## 使用した技術

HTML / CSS / TypeScript /
React / Redux / Firebase / Firestore /
Material-UI / react-router / react hooks

## 開発方法

- 初期は react-router の withRouter を使いコンポーネントをラップしていましたが、途中で react-router の hooks に置き換えました。
- redux-thunk を使って非同期関数内に firestore からデータを取得する処理と store に登録する処理をまとめて書いていましたが、役割を適切に分割した上で、コンポーネントの useEffect 内で非同期処理を行うようすることで、redux-thunk を使った非同期処理が不要になったためを取り除きました。
- redux-thun と組み合わせて非同期処理の中で画面遷移を行いたかったため、connected-react-router を使っていましたが、上記の通りコンポーネントに処理を移すことによりコンポーネント外での画面遷移が不要になったので、connected-react-router を取り除きました。
- redux-logger を使い redux の store をコンソールで確認し、デバッグ作業を行いました。
- ESLint を導入することでコード規約に沿ったコードを書くことができました。

### ホスティング

firebase hosting

### データベース

firestore / firebase storage

## Web サイトの URL

https://ufo-society1974admin.web.app/

- E-mail: test@test.example.com / パスワード: test12 でログインできます

## GitHub リポジトリの URL

https://github.com/diskszk/ufo-society1974-admin
