var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
function MongoConnector() {
    var userScheme = new Schema({
        name: String,
        age: Number
    });
    mongoose.connect("mongodb://localhost:27017/mycaDB");

    var User = mongoose.model("User", userScheme);
    var user = new User({
        name: "Bill",
        age: 41
    });

    user.save(function(err){
        mongoose.disconnect();  // отключение от базы данных

        if(err) return console.log(err);
        console.log("Сохранен объект", user);
    });


    // var userScheme = new Schema({
    //     name: String,
    //     age: Number
    // });
    // var url = 'mongodb://localhost:27017/mycaDB';
    // MongoClient.connect(url, function(err, db) {
    //     console.log('success connect');
    //     var User = mongoose.model("WebUser", userScheme);
    //
    //     var user = new User({
    //         name: "Bill",
    //         age: 41
    //     });
    //     user.save(function (err) {
    //         console.log('save user');
    //         mongoose.disconnect();  // отключение от базы данных
    //
    //         if(err){
    //             console.log(err);
    //             return;
    //         }
    //         console.log("Сохранен объект", user);
    //     })
    //     db.close();
    //
    //
    // });

}

module.exports = new MongoConnector();