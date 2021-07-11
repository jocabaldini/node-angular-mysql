const heroRepository = require("./hero-repository")()
const productRepository = require("./product-repository")()

module.exports = () => ({
  heroRepository: {
    addHero: heroRepository.addHero,
    getHeroes: heroRepository.getHeroes,
  },
  productRepository: {
    getAvailableSpaces: productRepository.getAvailableSpaces,
    addProduct: productRepository.addProduct,
    getProducts: productRepository.getProducts,
  },
})
