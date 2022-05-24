module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {},
    { timestamps: false }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'id',
    });
    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'id',
    });
    
  };
};
