/**
 * @typedef {import('../domain/model').IHero} Hero
 * @typedef {import('..').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
 module.exports = () => {
	const heroes = [
		{ id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
	]

	return {
	  addHero: (hero) => heroes.push(hero),
	  getHeroes: (id) => (id ? heroes.filter(hero => hero.id === parseInt(id)) : heroes),
	}
}
  