const productRoutes = require("./product-routes")
const heroesRoutes = require("./heroes-routes")

module.exports = (server, application) => {
	const apiPrefix = "/api/v1"
	heroesRoutes(server, application, apiPrefix)
	productRoutes(server, application, apiPrefix)
}