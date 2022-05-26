const categoryService = require('../services/categoryService');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(name);
    const category = await categoryService.createCategory(name);
    
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
};
