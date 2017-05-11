install:
	npm install

build:
	docker build -t node-hello .

run:
	docker run -p 43567:8989 -d node-hello

test:
	curl localhost:43567

clean:
	rm -rf node_modules


.PHONY: install build run test clean
