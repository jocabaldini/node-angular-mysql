FROM node:latest

RUN mkdir /usr/src/api

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

CMD [ "npm", "run", "dev" ]