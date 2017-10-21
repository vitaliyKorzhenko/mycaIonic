var promise = require('promise');

var Question = require('../db/models').Question;

function QuestionController() {

}

QuestionController.prototype.saveDefaultQuestion = function () {

    var saveDefaultQuestion = [
        {
            name: "Kitchen",
            text: "Кухня/Блюда",
            maxRating: 10
        },
        {
            name:  "Service",
            text:   'обслуживание',
            maxRating: 10
        },
        {
            name:  "Hygiene",
            text:   'гигиена',
            maxRating: 10
        }
    ]




    return new Promise (function (resolve, reject) {
        console.log("create Default Categories");

        Question.bulkCreate(saveDefaultQuestion,{validate:false})
            .then(function() {
                Question.find({where: {id: 1}})
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


QuestionController.prototype.getAllQuestions = function () {

    return new Promise(function (resolve, reject) {
        Question.findAll().then(function (questions) {
            resolve(questions);
        }, function (error) {
            reject(error);
        })
    })
}



module.exports = new QuestionController();