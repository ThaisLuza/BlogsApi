// const { erroHandler } = require('../../utils/erroHandler');
const { erroHandler } = require('../../utils/erroHandler');
const { BlogPost, Category, User } = require('../models/index');

// const createPost = async (title, content, categoryIds, userId) => {
//   const findId = await Category.findAll({ where: { id: categoryIds } });
//   if (findId) throw erroHandler(400, '"categoryIds" not found');

//   const newPost = await BlogPost.create({ title, content, userId });
//   return newPost;
// };

const getAll = async () => {
  const posts = await BlogPost.findAll({
    // inclui o model(tabela) User e Category
    // quando buscar os posts, a segunda opção vai além de trazer os posts incluir com quem ele está relacionado
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

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
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

  if (!post) throw erroHandler(404, 'Post does not exist');
  return post;
};

module.exports = {
  // createPost,
  getAll,
  getById,
};
