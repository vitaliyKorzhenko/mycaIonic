'use strict';

module.exports = (sequelize, DataTypes) => {

    // "fistName": "William",
    //     "lastName": "Worner",
    //     "email": "william.worner@gmail.com",
    //     "password": "q1w2e3r4t5y6",
    //     "birthday": "16.12.1993",
    //     "gender": "m",
    //     "phoneNumber": "+380669947651"



  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    password: DataTypes.STRING,
      email: DataTypes.STRING,
      birthday: DataTypes.STRING,
      gender: DataTypes.STRING,
      phoneNumber: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here


      }
    }
  });

    return User;
};