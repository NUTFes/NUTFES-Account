build:
# 全てのコンテナをビルド
	docker compose down -v
	docker compose build
# Keycloakのマイグレーション
	docker compose up -d auth # depends on db container
	sleep 20 # wait for keycloak migration
# DBの変更を適用
	docker compose exec db psql postgres://keycloak:password@db:5432/keycloak -f /sql/init.sql
# Hasura初期構築
	docker compose up -d api
# Next.js初期構築
	docker compose up -d front
	docker compose exec front npm install
	docker compose exec front npm run prepare # for husky

db-export:
# APIの変更をエクスポート
	docker compose up -d api
	docker compose exec api hasura metadata export
