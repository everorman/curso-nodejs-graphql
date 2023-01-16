const checkJwt = async (context) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) {
    throw boom.unauthorized('jwt invalid');
  }
  return user;
}

module.exports = checkJwt;