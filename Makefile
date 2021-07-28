up:
	docker-compose up

run:
	docker-compose run node npm run start

start: up run

.PHONY: start \ 
				up run