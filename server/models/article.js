'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      article.belongsTo(models.user)
      article.hasMany(models.comment)
      article.belongsTo(models.movie)
    }
  };
  article.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    upload_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};