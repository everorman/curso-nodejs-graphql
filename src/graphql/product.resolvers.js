const getProduct = (_, { id }) => {
  return {
    id: id,
    name: 'Demo produc',
    price: 100,
    image: "http://image.jpg",
    createdAt: new Date().toISOString()
  }
}

const getProducts = (_, args) => {
  return [];
}

module.exports = { getProduct, getProducts };