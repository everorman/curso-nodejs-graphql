const { getProduct, getProducts, addProduct, updateProduct, deleteProduct } = require('./product.resolvers')
const { login } = require('./auth.response');
const { addCategory } = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/)
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
  },
  CategoryNameType
}
module.exports = resolvers;