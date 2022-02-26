# stickee_account

## 初期手順
以下の手順で環境を構築してください。
1. クローン
```
$ git clone git@github.com:NUTFes/stickee_account.git
```
2. ビルドするスクリプトに実行権限を付与
```
$ chmod +x scripts/build.sh
```
3. コンテナをビルド
```
$ docker-compose build
```
4. DBマイグレーション
```
docker-compose run --rm backend alembic upgrade head
```
5. Seedデータ作成
```
docker-compose run --rm backend python3 app/db/seed.py
```
6. npm install
```
docker-compose run --rm frontend npm install
```
7. コンテナを起動
```
$ docker-compose up -d
```

## マイグレーション
DBのマイグレーションはAlembicによってバージョン管理されています。

したがって，モデルを追加した際はAlembicのmigrationバージョンを追加・更新する必要があります。

バージョン追加方法は以下の通りです。

### バージョン作成

- バージョン作成
```
$ docker-compose run --rm backend alembic revision --autogenerate -m "<add  example column>" 
```

- 成功しない場合
`backend/app/db/models.py`が間違っている可能性が高く，特にSqlalchemyによるエラーの可能性が高い。

`backend/app/db/models.py`を編集し，もう一度バージョンを作成する

### マイグレーション

- マイグレーション
```
$ docker-compose run --rm backend alembic upgrade head
```

- 成功しない場合
`backend/app/db/models.py`が間違っている可能性が高く，特に使用しているSQLによるエラーの可能性が高い。

自動で生成された`backend/app/alembic/versions/yyyymmdd-HHMM_add_example_column.py`を削除し

`backend/app/db/models.py`を編集し，バージョン作成の手順に戻る。

※例
`nullable=false`と`server_default`はセットで設定する必要がある。
