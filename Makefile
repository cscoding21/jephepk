build:
	docker build -t jephepk .


run:
	docker run -d -p 3001:3001 jephepk:latest
