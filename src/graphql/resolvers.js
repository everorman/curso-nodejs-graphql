const { getProduct, getProducts } = require('./product.resolvers')

const resolvers = {
  Query: {
    hello: () => 'Hola mundo',
    product: getProduct,
    products: getProducts
  }
}
module.exports = resolvers;