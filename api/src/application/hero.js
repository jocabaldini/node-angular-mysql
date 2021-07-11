/**
 * @typedef {import('../domain/model').IHero} Hero
 * @typedef {import('..').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
 module.exports = (dependencies) => ({
	/**
	 * Register a new hero.
	 * @param {Hero} hero The hero to be
	 * processed
	 * @return {import('..').IAPIReturn} Process results.
	 */
	createHero: (hero) => {
	  const apiStatusCodes = dependencies.helpers.getApiStatusCodes()
	  let statusCode = apiStatusCodes.UNPROCESSABLE_ENTITY
  
	  const validHero = dependencies.domain.validateHeroCreation(hero)
	  if (validHero === true) {
		dependencies.infrastructure.heroRepository.addHero(hero)
		statusCode = apiStatusCodes.CREATED
	  }
  
	  return dependencies.helpers.makeReturn(statusCode.status, {
		message: statusCode.message,
	  })
	},
	getHeroes: (params) => {
	  const apiStatusCodes = dependencies.helpers.getApiStatusCodes()
	  let statusCode = apiStatusCodes.OK
	  let heroes = dependencies.infrastructure.heroRepository.getHeroes(
		params.id
	  )
	  
	  if (params.id) {
		if (heroes.length === 0) {
			statusCode = apiStatusCodes.NOT_FOUND
		} else {
			heroes = heroes[0]
		}
	  }
	  return dependencies.helpers.makeReturn(statusCode.status, {
		message: statusCode.message,
		data: heroes,
	  })
	},
  })
  