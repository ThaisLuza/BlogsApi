// const { erroHandler } = require('../../utils/erroHandler');
const { BlogPost, Category, User } = require('../models/index');

// const createPost = async (title, content, categoryIds, userId) => {
//   const findId = await Category.findAll({ where: { id: categoryIds } });
//   if (findId) throw erroHandler(400, '"categoryIds" not found');

//   const newPost = await BlogPost.create({ title, content, userId });
//   return newPost;
// };

const getAll = async (payload) => {
  const posts = await BlogPost.findAll({
    ...payload,
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        trough: { attributes: [] },
      },
    ],
  });
  return posts;
};

module.exports = {
  // createPost,
  getAll,
};
