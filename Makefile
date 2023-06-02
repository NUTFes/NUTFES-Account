build:
	docker compose build
	make db-init

db-init:
	docker compose up api -d
	docker compose exec api psql postgres://keycloak:password@db:5432/keycloak -f init.sql

db-export:
	docker compose up -d api
	docker compose exec api hasura metadata export
