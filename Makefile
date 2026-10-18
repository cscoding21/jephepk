build:
	docker build --pull -t jephepk .


run:
	docker run -d -p 3000:3000 jephepk
