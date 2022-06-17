const postService = require('../services/postService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
  
    const newPost = await postService.createPost({
      title,
      content,
      categoryIds,
      userId: req.userId,
    });
    return res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const posts = await postService.getAll();
    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await postService.getById(id);
    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
