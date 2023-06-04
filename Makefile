build:
	docker compose build
	make db-init

db-init:
	docker compose up api -d
	sleep 20
	docker compose exec api psql postgres://keycloak:password@db:5432/keycloak -f init.sql

db-export:
	docker compose up -d api
	docker compose exec api hasura metadata export

prod-build:
	docker-compose -f docker-compose.prod.yml build
	make db-init

prod-db-init:
	docker-compose -f docker-compose.prod.yml up api -d
	sleep 20
	docker-compose -f docker-compose.prod.yml exec api psql postgres://keycloak:password@db:5432/keycloak -f init.sql
