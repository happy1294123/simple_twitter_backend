'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    static associate(models) {
      Tweet.hasMany(models.Like)
      Tweet.hasMany(models.Reply)
      Tweet.belongsTo(models.User)
    }
  }
  Tweet.init(
    {
      UserId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Tweet',
      tableName: 'Tweets',
    }
  )
  return Tweet
}
