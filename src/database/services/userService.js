const { User } = require('../models/index');
const { erroHandler } = require('../../utils/erroHandler');
const generateToken = require('../../utils/generateJWT');

const createNewUser = async (data) => {
  const findEmail = await User.findOne({ where: { email: data.email } });
  // console.log(findEmail.dataValues);

  if (findEmail) throw erroHandler(409, 'User already registered');

  await User.create({ ...data });

  return generateToken(data.email);
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

module.exports = {
  createNewUser,
  getAll,
};
