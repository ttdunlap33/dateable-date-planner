const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Outdoor extends Model {}

Outdoor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.STRING,
      allowNull: true
    },
  //   user_id: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: 'user',
  //       key: 'id',
  //     },
  //   },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'outdoor',
  }
);

module.exports = Outdoor;
