const product = require("./product")
const hero = require('./hero')

module.exports = (dependencies) => ({
  validateHeroCreation: hero(dependencies).validateHeroCreation,
  validateProductCreation: product(dependencies).validateProductCreation,
  hasAvailableSpace: product(dependencies).hasAvailableSpace,
})
