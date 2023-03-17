# stickee

## 初期手順

以下の手順で環境を構築してください。

### クローン

```bash
git clone git@github.com:NUTFes/NUTFES-Account.git
```

### ビルド

```bash
docker compose build
docker compose -f docker-compose.prod.yml run --rm cloudflare tunnel login
docker compose -f docker-compose.prod.yml run --rm cloudflare tunnel create account-dev
docker compose -f docker-compose.prod.yml run --rm cloudflare tunnel route dns account-dev account-dev.nutmeg.cloud
```

### 起動

```bash
docker compose up -d
```
