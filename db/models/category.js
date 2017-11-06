'use strict';
module.exports = (sequelize, DataTypes) =>
{

    var category = sequelize.define('category', {
        name: {
            type: DataTypes.STRING

        },
        russianName: {
            type: DataTypes.STRING

        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return category;
};


