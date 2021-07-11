/**
 * @typedef {import('./model').IHero} Hero
 * @typedef {import('..').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
 module.exports = (dependencies) => ({
	/**
	 * Validate a hero
	 * @param {Hero} hero The hero to be
	 * validated
	 */
	validateHeroCreation: (hero) => {
		if (!hero.id || hero.id.length === 0) {
			return false
		}
	  if (!hero.name || hero.name.length === 0) {
		  return false
	  }
	  return true
	},
  })
  