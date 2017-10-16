
var promise = require('promise');

var Category = require('../db/models').Category;

// var Category = require()

function  CategoryController() {

}

CategoryController.prototype.createNewCategory = function (name) {

    return new Promise (function (resolve, reject) {
        Category.create({name:name}).then(function (createdCategory) {
             if (createdCategory) {
                 resolve(createdCategory);
             }
        }, function (error) {
            reject(error);
        })
    })
}


module.exports = new CategoryController();