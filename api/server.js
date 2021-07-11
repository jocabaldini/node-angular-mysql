const express = require("express")
const cors = require("cors")

const routes = require("./src/interfaces/v1/index")

module.exports = (application) => {
  const server = express()

  server.use(cors())
  server.use(express.json())
  routes(server, application)

  server.listen(process.env.PORT)
  return server
}
