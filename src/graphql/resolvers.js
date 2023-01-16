const { getProduct, getProducts, addProduct, updateProduct, deleteProduct } = require('./product.resolvers')
const { login } = require('./auth.response');
const { addCategory } = require('./category.resolvers');

const resolvers = {
  //Are used to retrieve data
  Query: {
    hello: () => 'Hola mundo',
    product: getProduct,
    products: getProducts
  },
  //Are used to mutate data. CRUD
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory
  }
}
module.exports = resolvers;