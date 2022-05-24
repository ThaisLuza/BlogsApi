// module.exports = (sequelize, DataTypes) => {
//   const PostCategory = ssequelize.defone('PostCategory',
//   {},
//   { timestamps: false },
//   );

//   PostCategory.associate = (models) => {
    
//   }
// }








'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PostCategory.init({
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostCategory',
  });
  return PostCategory;
};