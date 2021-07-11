# Basic Node project with Express

This project is a scratch of Node with Express with some configuration to help the development.\
The goal is to be used as a starter for furthers applications.

The DEV configuration was created following this [post](https://blog.theodo.com/2019/08/why-you-should-use-eslint-prettier-and-editorconfig-together/), to use ESLint, Prettier and EditorConfig.

The Dockerfile is configured to start the server in DEV mode.\
Commands to create a image and start a container with a volume to the project:
* docker build -t node-express .
* docker run --name teste -v $(pwd):/usr/src/app -p 3000:3000 node-express

## Available commands
* start: "node index.js",
* dev: "NODE_ENV=dev nodemon index.js",
* test: "NODE_ENV=test nyc mocha --exit test/**/*.spec.js",
* lint: "eslint *.js .",
* lint-fix: "eslint --fix *.js ."

## Dependencies
* Express
* Dotenv
* http-status-codes

## Dev Dependencies
* eslint 
* eslint-config-prettier 
* eslint-config-standard 
* eslint-plugin-import 
* eslint-plugin-node 
* eslint-plugin-prettier 
* eslint-plugin-promise 
* mocha
* nodemon
* prettier
* sinon
* nyc
