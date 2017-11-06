'use strict';
module.exports = (sequelize, DataTypes) => {
  var Institution = sequelize.define('Institution', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    russianName: DataTypes.STRING,
    dataAboutWork: DataTypes.STRING,
      latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,

  }, {
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }); 
  return Institution;
};

// {
//     "ints":[
//     {
//         "name ru": "Чурраско Бар",
//         "phone": "+380 67 578 5665",
//         "address": "Ул. Пушкинская, 22, Харьков",
//         "dataAboutWork": "понедельник 11–2, вторник 11–2, среда 11–2, четверг 11–2, пятница 11–4, суббота 11–4, воскресенье 11–0",
//         "latitude": "49.994405",
//         "langitude": "36.235788",
//         "category": "Бургеры, Стейки, Завтраки, Бизнес Ланчи, Ужины, Гастро Паб"
//         "menu": ""
//     },
//     {
//         "name ru": "Две девятки",
//         "phone": "+380 67 156 8450",
//         "address": "Ул. Маршала Бажанова, 7, Харьков",
//         "dataAboutWork": "понедельник 10–23, вторник 10–23, среда 10–23, четверг 10–23, пятница 10–23, суббота 10–23, воскресенье 10–23",
//         "latitude": "49.996541",
//         "langitude": "36.241432",
//         "category": "Пиво, Гастро Паб"
//         "menu": ""
//     },
//     {
//         "name ru": "Meet&Meat",
//         "phone": "+380 96 059 2288",
//         "address": "Ул. Маршала Бажанова, 12, Харьков",
//         "dataAboutWork": "понедельник 10–22, вторник 10–22, среда 10–22, четверг 10–22, пятница 10–22, суббота 10–22, воскресенье 10–22",
//         "latitude": "49.995784",
//         "langitude": "36.240394",
//         "category": "Гастро Паб"
//         "menu": ""
//     }
// ]
// }
//лого название потом категорияnpm
