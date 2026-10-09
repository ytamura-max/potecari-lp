# ポテキャリ LP

未経験・フリーター向け転職エージェント「ポテキャリ」の静的ランディングページです。HTML / CSS / JavaScriptだけで作られているため、ビルドは不要です。

## ローカルでの起動方法

1. このフォルダを開きます。
2. `index.html` をダブルクリックするとブラウザで表示できます。
3. より実際の公開環境に近い形で確認したい場合は、VS Codeの拡張機能「Live Server」をインストールし、`index.html` を右クリックして「Open with Live Server」を選びます。

## GitHubへのアップロード方法

1. GitHubにログインし、右上の「+」から「New repository」を選びます。
2. リポジトリ名を入力し、「Create repository」をクリックします。
3. 作成後の画面で「uploading an existing file」を選びます。
4. このフォルダ内のファイル（`index.html`、`style.css`、`script.js`、`favicon.svg`、`ogp.svg`、`README.md`）をドラッグ＆ドロップします。
5. ページ下部の「Commit changes」をクリックするとアップロード完了です。

## Vercelへのデプロイ方法

1. [Vercel](https://vercel.com/)にGitHubアカウントでログインします。
2. 「Add New...」→「Project」を選びます。
3. GitHubにアップロードしたリポジトリの「Import」をクリックします。
4. Framework Presetは「Other」のままで問題ありません。Build CommandとOutput Directoryは空欄のままにします。
5. 「Deploy」をクリックします。数分後に `https://プロジェクト名.vercel.app` のような公開URLが発行されます。
6. 公開URLが決まったら、`index.html` 内の `https://example.com/` を発行された実際のURLに4か所置き換え、もう一度GitHubへアップロードします。Vercelが自動で再公開します。これでGoogle検索やSNS共有時の正規URL・OGPが正しくなります。
7. 独自ドメインを使う場合は、Vercelプロジェクトの「Settings」→「Domains」から設定できます。ドメイン設定後は、上記のURLも独自ドメインに置き換えてください。

## Instagram・SNSに掲載する方法

公開後に発行されたURLを、そのままInstagramプロフィールの「リンク」に登録できます。Instagramからの流入を区別したい場合は、次のようにURL末尾へ計測用の文字列を付けて登録してください（例）。

`https://あなたのサイトURL/?utm_source=instagram&utm_medium=social&utm_campaign=profile`

プロフィール文には「未経験から正社員を目指すなら ↓ 無料相談」のような短い導線を添えると、LINE相談への意図が伝わりやすくなります。ストーリーズでは同じURLをリンクスタンプに設定できます。

> 注：Instagramのフィード投稿本文には外部リンクを直接タップできる形式で設置できません。プロフィールリンクまたはストーリーズのリンクスタンプを使ってください。

## 公開前に差し替える項目

- フッターの「ここに許可番号を掲載」：実際の有料職業紹介事業許可番号
- フッターの会社情報、プライバシーポリシー、利用規約のリンク先
- `index.html` の `https://example.com/`：Vercelで発行された実際のサイトURL

`vercel.json` はVercel用の公開・セキュリティ設定、`robots.txt` は検索エンジン向けの基本設定です。削除せず、他のファイルと一緒にアップロードしてください。

公式LINEへのリンクは `https://lin.ee/Qs5M61v` に設定済みです。
