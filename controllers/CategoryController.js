
var promise = require('promise');

var Category = require('../db/models').category;

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


CategoryController.prototype.createDefaultCategories = function () {

    var arrayCategories = [{name:"Food"},{name:"Burgers"},{name:"Pizza"},{name:"Sushi"},
        {name:"Breakfast"},
        {name:"Dinner"},
        {name:"Lunch"},
        {name:"Hookah"},
        {name: "Pub (Gastro)"},
        {name: "Steaks"},
        {name: "Desserts"}
    ];


    return new Promise (function (resolve, reject) {
        console.log("create Default Categories");

        Category.bulkCreate(arrayCategories,{validate:false})
            .then(function() {
                Category.find({where: {id: 1}})
                    .then(function(category) {
                        resolve(category);
                        console.log('Bulk created user name: ' + user.name);
                    })
                    .catch(function(e) {
                        console.log ('err in find ' + e); });
            })
            .catch(function(e) { console.log ('err in bulk create ' + e); });
    })
        .catch(function(e) { console.log (e); });
}

CategoryController.prototype.returnAllCategories = function () {

    return new Promise (function (resolve, reject) {
            Category.findAll().then(function (categories){
                console.log("all categories return! " + JSON.stringify(categories));
                resolve(categories);
            },function (error) {
                reject(error);
            })
    })


}


module.exports = new CategoryController();