const Joi = require('joi');

const NEWCATEGORY = Joi.object({
  name: Joi.string().required(),
});

const validateCategory = (req, res, next) => {
  const { name } = req.body;

  const { error } = NEWCATEGORY.validate({ name });

  if (error) next({ status: 400, message: error.message });
  // console.log(error);

  next();
};
module.exports = validateCategory;
