# コメビュについて

現在、コメビュには 2 つの種類があります。

## 簡易版

KnzkLive には OBS の「ブラウザ」を使用して表示する簡易的なコメビュツールが搭載されています。

#### 使い方 (OBS)

1. 配信枠を取得した状態で、右上の「[配信を管理](https://live.knzk.me/live_manage)」から、管理画面を開いてください。
2. **コメビュ URL** を取得してください。

<ImageZoom
  url="https://i.imgur.com/GKiQJyc.png"
  :border="false"
/>

3. OBS を起動し、「ソース」の＋をクリックし、「ブラウザ」を選択してください。

<ImageZoom
  url="https://i.imgur.com/iKqoBZd.png"
  :border="false"
/>

4. ソースの名前は適当に決めて、OK をクリックしてください。

<ImageZoom
  url="https://i.imgur.com/uGcEMvy.png"
  :border="false"
/>

5. 「URL」には**コメビュ URL**、「カスタム CSS」は**空欄**にしてください。それ以外の項目はお好みに設定して、OK をクリックしてください。

<ImageZoom
    url="https://i.imgur.com/ylsOBMV.png"
    :border="false"
/>

6. 好きな位置に設置したら設定完了です。

<ImageZoom
    url="https://i.imgur.com/DlD1ZCa.png"
    :border="false"
/>

なにか問題(更新されないなど)が発生したら、ソース編集からブラウザを再読込してください。

## コメビュソフト(半公式?)

@rinsuki が制作した KnzkLive 専用コメビュソフトを使用することもできます:
https://github.com/rinsuki/KnzkLiveCommentViewer

https://ci.appveyor.com/project/rinsuki/knzklivecommentviewer の「Artifacts」タブからダウンロードできます。

**棒読みちゃんが起動していないと落ちるようです(多分)**
