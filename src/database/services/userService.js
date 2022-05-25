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

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) throw erroHandler(404, 'User does not exist');

  return user;
};

module.exports = {
  createNewUser,
  getAll,
  getById,
};
