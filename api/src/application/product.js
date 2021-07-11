/**
 * @typedef {import('../domain/model').IProduct} Product
 * @typedef {import('..').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
module.exports = (dependencies) => ({
  /**
   * Register a new student.
   * @param {Product} product The product to be
   * processed
   * @return {import('..').IAPIReturn} Process results.
   */
  createProduct: (product) => {
    const apiStatusCodes = dependencies.helpers.getApiStatusCodes()
    let statusCode = apiStatusCodes.UNPROCESSABLE_ENTITY

    const validProduct = dependencies.domain.validateProductCreation(product)
    if (validProduct === true) {
      if (dependencies.domain.hasAvailableSpace(product)) {
        dependencies.infrastructure.productRepository.addProduct(product)
        statusCode = apiStatusCodes.CREATED
      } else {
        statusCode.message = "No more available spaces in the warehouse"
      }
    }

    return dependencies.helpers.makeReturn(statusCode.status, {
      message: statusCode.message,
    })
  },
  getProducts: (params) => {
    const products = dependencies.infrastructure.productRepository.getProducts(
      params.warehouse
    )
    const apiStatusCodes = dependencies.helpers.getApiStatusCodes()
    return dependencies.helpers.makeReturn(apiStatusCodes.OK.status, {
      message: apiStatusCodes.OK.message,
      data: products,
    })
  },
})
