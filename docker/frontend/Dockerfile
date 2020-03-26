# as represents another name for the following set of commands
# Build a node project in Builder phase
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

# FROM starts a new phase (PROD)
FROM nginx
# COPY the build folder from the builder phase
COPY --from=builder /app/build /usr/share/nginx/html
# START nginx is done by container as the default command



