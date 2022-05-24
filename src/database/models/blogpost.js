const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.STRING,
      updated: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongTo(models.User, {
      foreignKey: 'userId',
      as: 'blogposts',
    });
  };

  return BlogPost;
};

module.exports = BlogPost;
