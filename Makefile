dev:
	docker-compose -f docker-compose.dev.yml up -d
dev-build:
	docker-compose -f docker-compose.dev.yml up -d --build
prod:
	docker-compose -f docker-compose.prod.yml up --force-recreate --build -d && docker image prune -f