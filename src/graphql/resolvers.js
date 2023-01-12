const { getProduct, getProducts, addProduct } = require('./product.resolvers')

const resolvers = {
  Query: {
    hello: () => 'Hola mundo',
    product: getProduct,
    products: getProducts
  },
  Mutation: {
    addProduct
  }
}
module.exports = resolvers;