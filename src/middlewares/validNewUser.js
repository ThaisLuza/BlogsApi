const Joi = require('joi');
// const { erroHandler } = require('../utils/erroHandler');

const NEWUSER = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().required(),
});

const validateUser = (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const { error } = NEWUSER.validate({ displayName, email, password, image });

  if (error) next({ status: 400, message: error.message });
  // console.log(error);

  next();
};
module.exports = validateUser;
