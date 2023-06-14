build:
# 全てのコンテナをビルド
	docker compose down -v
	docker compose build
# Keycloakのマイグレーション
	docker compose up -d auth
	sleep 20 # wait for keycloak migration
	make auth-export # export keycloak initial data
	docker compose down -v
	make auth-import # import merged data
# DBの変更を適用
	docker compose exec db psql postgres://keycloak:password@db:5432/keycloak -f /sql/init.sql
# Hasura初期構築
	docker compose up -d api
# Next.js初期構築
	docker compose up -d front
	docker compose exec front npm install
	docker compose exec front npm run prepare # for husky

api-export:
# APIの変更をエクスポート
	docker compose up -d api
	docker compose exec api hasura metadata export

auth-export:
# Keycloakの変更をエクスポート
	docker compose run --rm auth export --file /opt/keycloak/data/export.json

auth-import:
# Keycloakの変更をインポート
	docker compose run --entrypoint '' --rm auth /opt/keycloak/data/merge.sh
	docker compose run --rm auth import --file /opt/keycloak/data/merged.json