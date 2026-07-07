# Portfolio

一次創作・VTuber 向けの創作活動をしているクリエイターのポートフォリオサイト。
**素の HTML / CSS / JS のみ。ビルド不要**です。

## プレビュー

`index.html` をブラウザで開くだけ（ダブルクリック）。

## ファイル構成

```
index.html    トップ（動画エリア＋右サイドの縦ナビ）
about.html    About（プロフィール／使用ソフト／取得資格／pickup）
works.html    Works（カテゴリ絞り込み・三列グリッド）
contact.html  Contact（お問い合わせフォーム＋横長イラスト枠）
style.css     デザイン（配色は先頭の :root 変数を編集）
script.js     ヒーロー切替・タブ絞り込み・フォーム確認
images/       画像を置く場所（自分で作成）
```

## よく編集する場所

- **お名前 / 肩書き**：各 HTML の `Your Name` ／ `Creator / Illustrator`
- **SNS リンク**：`Commission` / `Link` / `X` の `href="#"` を実 URL に（不要な行は削除）
- **画像**：`images/` フォルダを作り、各所の `TODO` コメント箇所を `<img src="images/...">` に差し替え
- **作品追加**：`works.html` の `<article class="card" data-category="...">` を複製（`original` / `vtuber` / `other`）
- **配色変更**：`style.css` 先頭の `:root`（`--sage` / `--blush` / `--cream` など）

## お問い合わせフォームの送信

現在は入力チェックと完了メッセージのみ（実送信なし）。実際にメールを受け取るには
[Formspree](https://formspree.io/)（無料枠あり）などが手軽です。手順は `contact.html`
内のコメントを参照してください。

## 公開（ホスティング）

このフォルダの中身をそのままアップロードするだけで公開できます。
無料の例：[Netlify Drop](https://app.netlify.com/drop)（フォルダをドラッグ＆ドロップ）、
GitHub Pages、Cloudflare Pages など。
