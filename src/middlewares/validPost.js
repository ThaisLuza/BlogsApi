const Joi = require('joi');
// const { erroHandler } = require('../utils/erroHandler');

const NEWPOST = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const validateUser = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const { error } = NEWPOST.validate({ title, content, categoryIds });

  if (error) next({ status: 400, message: error.message });
  // console.log(error);

  next();
};
module.exports = validateUser;