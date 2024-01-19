# 家計簿 bot

## 使い方 (WIP)

```bash
./run.sh
```

## 作りたいもの

- 支出状況を毎日 LINE か Slack で送ってくれる bot を作りたい
- bot には URL が載っていて、ジャンプすると収支のグラフを見られるようにしたい

## 通知内容

### 毎日の通知

- 残りの使える額 / 今月使える額(手取りから固定費を引いた額)

### 毎月の通知

- 固定費
    - 家賃
    - 水道
    - 電気
    - ガス
    - 携帯
    - インターネット
    - サブスク
        - amazon
        - niconico
        - …
- その他 (食費、遊び、日用品 等)

## 参考

- グラフはすでに作ってある: https://github.com/wakewakame/money
- puppeteer で明細をスクレイピングできそう
    - docker で簡単に起動できる
    - [https://pptr.dev/guides/docker](https://pptr.dev/guides/docker)
- ~~三菱 UFJ には個人利用できる API がある:~~ [https://developer.portal.bk.mufg.jp/btmu/openapitrial/api/retail/accounts\_trial\_v2#/_v2_111/overview](https://developer.portal.bk.mufg.jp/btmu/openapitrial/api/retail/accounts_trial_v2#/_v2_111/overview)
    - 勘違いだった…

