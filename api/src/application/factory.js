const product = require("./product")
const hero = require("./hero")
const infrastructure = require("../infrastructure")
const helpers = require("../../helpers")

const dependencies = {
  infrastructure: infrastructure(),
  helpers,
}
dependencies.domain = require("../domain")(dependencies)

module.exports = () => ({
  dependencies: dependencies,
  createHero: hero(dependencies).createHero,
  getHeroes: hero(dependencies).getHeroes,
  createProduct: product(dependencies).createProduct,
  getProducts: product(dependencies).getProducts,
})
