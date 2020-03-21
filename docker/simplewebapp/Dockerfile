#BASE IMAGE
FROM node:alpine
#SPECIFY WORK DIRECTORY
WORKDIR /usr/app
#COPY package json file
COPY ./package.json ./
#ADD DEPENDENCY
RUN npm install
#COPY FILES from local branch to container.
COPY ./ ./
#Default command
CMD ["npm","start"]
#to build 
