const express = require("express")
const watchEndPoints = require("../../../watchEndPoints")

module.exports = (server, application, apiPrefix) => {
  const prefix = apiPrefix + "/heroes"
  const heroesRouter = express.Router()
  const apiStatusCodes = application.dependencies.helpers.getApiStatusCodes()

  heroesRouter.get("/:id*?", (req, res) => {
    console.log('Buscando heróis')
    try {
      const ret = application.getHeroes(req.params)
      console.log(ret.data)
      return res.status(ret.statusCode).send(ret.data)
    } catch (error) {
      return res
        .status(apiStatusCodes.INTERNAL_SERVER_ERROR.status)
        .send(`Internal error: ${error}`)
    }
  })
  
  heroesRouter.post("", (req, res) => {
    try {
      const ret = application.createHero(req.body)
      return res.status(ret.statusCode).send(ret.data)
    } catch (error) {
      return res
        .status(apiStatusCodes.INTERNAL_SERVER_ERROR.status)
        .send(`Internal error: ${error}`)
    }
  })
  
  watchEndPoints.append(prefix, heroesRouter)
  server.use(prefix, heroesRouter)
}
