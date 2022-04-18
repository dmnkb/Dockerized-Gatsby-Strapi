dev:
	@NODE_ENV=development \
		docker-compose -f docker-compose.dev.yml up -d && \
		sleep 5 && \
		cd gatsby && yarn develop
dev-docker-build:
	@NODE_ENV=development \
		docker-compose -f docker-compose.dev.yml up --force-recreate --build -d && docker-compose -f docker-compose.prod.yml logs && \
		sleep 10s && \
		cd gatsby && yarn develop
prod:
	@NODE_ENV=production \
		docker-compose -f docker-compose.prod.yml up --force-recreate --build -d && docker-compose -f docker-compose.prod.yml logs && docker image prune -f