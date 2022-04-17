dev:
	@NODE_ENV=development \
		docker-compose -f docker-compose.dev.yml up -d && \
		sleep 5 && \
		cd gatsby && yarn develop
dev-docker-build:
	@NODE_ENV=development \
		docker-compose -f docker-compose.dev.yml up -d --build && \
		sleep 10s && \
		cd gatsby && yarn develop
prod:
	@NODE_ENV=production \
		docker-compose -f docker-compose.prod.yml up --force-recreate --build -d && docker image prune -f && \
		docker-compose -f docker-compose.prod.yml logs