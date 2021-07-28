up:
	docker-compose up

install:
	docker-compose run node npm install

run:
	docker-compose run node npm run start

start: up install run

.PHONY: start \ 
				up install run