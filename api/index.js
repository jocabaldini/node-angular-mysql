require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
})

const server = require("./server")
const application = require("./src/application")
const watchEndPoints = require("./watchEndPoints")

const init = () => {
  try {
    server(application())
    watchEndPoints.list()
    console.log("Server started")
  } catch (error) {
    console.log(`Error while starting server: ${error}`)
  }
}

init()
