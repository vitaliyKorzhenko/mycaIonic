'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserCategory = sequelize.define('UserCategory', {
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserCategory;
};