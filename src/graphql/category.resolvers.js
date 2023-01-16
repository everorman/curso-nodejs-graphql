const boom = require('@hapi/boom');
const CategoryService = require('./../services/category.service');
const service = new CategoryService();
const checkRolesGql = require('./../utils/checkRolesGQL');
const checkJwt = require('./../utils/checkJwtGql');

const addCategory = async (_, { dto }, context) => {
  const user = await checkJwt(context);
  checkRolesGql(user, ['admin'])
  return service.create({
    ...dto,
    image: dto.image.href
  });
}

module.exports = { addCategory };