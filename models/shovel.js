'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Shovel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shovel.init(
    {
      size: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Shovel',
    }
  )
  return Shovel
}
