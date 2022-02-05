# stickee_account

## 初期手順
以下の手順で環境を構築してください．
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
docker-compose run --rm backend python3 app/initial_data.py
```
6. コンテナを起動
```
$ docker-compose up -d
```

## マイグレーション
DBのマイグレーションはAlembicによってバージョン管理されています．

したがって，モデルを追加した際はAlembicのmigrationバージョンを追加・更新する必要があります．

バージョン追加方法は以下の通りです．

1. バージョン作成
```
$ docker-compose run --rm backend alembic revision --autogenerate -m "<add  example column>" 
```
2. バージョンファイルを編集

`backend/app/alembic/versions/yyyymmdd-HHMM_add_example_column.py`
のファイルを`backend/app/db/models.py`を確認しながら編集

3. マイグレーション
```
$ docker-compose run --rm backend alembic upgrade head
```
