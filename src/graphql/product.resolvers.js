
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

const addProduct = (_, { dto }) => {
  return service.create(dto);
}

const updateProduct = (_, { id, dto }) => {
  return service.update(id, dto);
}

const deleteProduct = async (_, { id }) => {
  await service.delete(id);
  return id;
}

module.exports = { getProduct, getProducts, addProduct, updateProduct, deleteProduct };