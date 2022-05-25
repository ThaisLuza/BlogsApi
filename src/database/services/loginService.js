const { User } = require('../models/index');

const generateToken = require('../../utils/generateJWT');
const { erroHandler } = require('../../utils/erroHandler');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    throw erroHandler(400, 'Invalid fields');
  }

  const token = generateToken(user);

  return token;
};

module.exports = {
  login,
};
