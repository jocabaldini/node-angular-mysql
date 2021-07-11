const routes = []

const append = (prefix, router) => {
  router.stack.forEach((layer) => {
    if (layer.route) {
      routes.push({
        route: prefix + layer.route.path,
        methods: Object.keys(layer.route.methods),
      })
    }
  })
}

const list = () => {
  console.log(routes)
}

module.exports = {
  append,
  list,
}
