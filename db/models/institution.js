'use strict';
module.exports = (sequelize, DataTypes) => {
  var Institution = sequelize.define('Institution', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }); 
  return Institution;
};


//лого название потом категория