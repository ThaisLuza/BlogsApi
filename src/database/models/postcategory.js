module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.defone(
    'PostCategory',
    {},
    { timestamps: false }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'id',
    });
  };
};
