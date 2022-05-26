const Joi = require('joi');

const NEWPOST = Joi.object({
  name: Joi.string().required(),
});

const validatePost = (req, res, next) => {
  const { name } = req.body;

  const { error } = NEWPOST.validate({ name });

  if (error) next({ status: 400, message: error.message });
  // console.log(error);

  next();
};
module.exports = validatePost;
