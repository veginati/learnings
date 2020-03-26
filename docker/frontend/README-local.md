<!-- ADD volumes mapping to the local file system -->

docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app [image-id]

<!-- e.g. docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app 3e03542bf244 -->

<!-- # This project can also use docker compose -->
docker-compose up

<!-- Execute a another command in the running conainer -->
docker exec -it [image-id] npm run test

<!-- Two phase, seperates build and production -->
docker build .
docker run -p 8080:80 920ef569e094