
var promise = require('promise');

var Category = require('../db/models').category;

// var Category = require()

var CategorySchema = require('../mongoSchema/categorySchema');


function  CategoryController() {

}

CategoryController.prototype.createCategory = function () {
    return new Promise (function (resolve, reject) {
        var Category = mongoose.model('Category', CategorySchema);
        var cate
    })
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

    var arrayCategories = [
        {name:"Burgers", russianName: 'Бургеры'},
        {name:"Pizza", russianName: 'Пицца'},
        {name:"Sushi", russianName: 'Суши'},
        {name:"Breakfast", russianName: 'Завтрак'},
        {name:"Dinner", russianName: 'Ужин'},
        {name:"Lunch", russianName: 'Ланч'},
        {name:"Hookah", russianName: 'Кальян'},
        {name: "Gastro Pub", russianName: 'Гастро Паб'},
        {name: "Steaks", russianName: 'Cтейки'},
        {name: "Desserts", russianName: 'Десерты'}
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