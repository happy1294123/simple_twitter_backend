'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    static associate(models) {
      Reply.belongsTo(models.User);
      Reply.belongsTo(models.Tweet);
    }
  }
  Reply.init(
    {
      userId: DataTypes.INTEGER,
      tweetId: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Reply',
      tableName: 'Replies',
    }
  );
  return Reply;
};
