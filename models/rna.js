'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rna extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rna.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    upi: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    userstamp: DataTypes.STRING,
    crc64: DataTypes.STRING,
    len: DataTypes.INTEGER,
    seq_short: DataTypes.STRING,
    seq_long: DataTypes.STRING,
    md5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rna',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return rna;
};