
const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id);
  return product;
}

const getProducts = async (_, args) => {
  const products = await service.find({});
  return products;
}

const addProduct = async (_, { dto }) => {
  const product = await service.create(dto);
  return product;
}

module.exports = { getProduct, getProducts, addProduct };