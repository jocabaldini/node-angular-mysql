const express = require("express")
const watchEndPoints = require("../../../watchEndPoints")

module.exports = (server, application, apiPrefix) => {
  const prefix = apiPrefix + "/products"
  const productRouter = express.Router()
  const apiStatusCodes = application.dependencies.helpers.getApiStatusCodes()

  productRouter.get("/:warehouse*?", (req, res) => {
    try {
      const ret = application.getProducts(req.params)
      return res.status(ret.statusCode).send(ret.data)
    } catch (error) {
      return res
        .status(apiStatusCodes.INTERNAL_SERVER_ERROR.status)
        .send(`Internal error: ${error}`)
    }
  })

  productRouter.post("", (req, res) => {
    try {
      const ret = application.createProduct(req.body)
      return res.status(ret.statusCode).send(ret.data)
    } catch (error) {
      return res
        .status(apiStatusCodes.INTERNAL_SERVER_ERROR.status)
        .send(`Internal error: ${error}`)
    }
  })

  watchEndPoints.append(prefix, productRouter)
  server.use(prefix, productRouter)
}
