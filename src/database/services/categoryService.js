const { Category } = require('../models/index');
// const { erroHandler } = require('../../utils/erroHandler');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  console.log(category);
  return category;
};

module.exports = {
  createCategory,
};
