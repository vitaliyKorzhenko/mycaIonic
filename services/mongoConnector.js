var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var instituions = require('../fixtures/institution.json');
var regions = require('../fixtures/region.json');
var async = require('async');



mongoose.Promise = global.Promise;

function loadFixtures() {

}


function loadRegion() {
    console.log('instituions');
    console.log(instituions)
    // mongoose.connect("mongodb://localhost:27017/mycaDB");
    var regionSchema = new Schema({
        name: {
            type: String,
            required:true
        },
        russianName: {
            type:String
        },
        extremeCoordinates: { type : Array , "default" : [] }
    });
    mongoose.connect("mongodb://localhost:27017/mycaDB");
    async.each(regions, function (region, callback) {
        var regionSchema = new Schema({
            name: {
                type: String,
                required:true
            },
            russianName: {
                type:String
            },
            extremeCoordinates: { type : Array , "default" : [] }
        });
        var RegionModel = mongoose.model('region', regionSchema);
        var regionInstance = new RegionModel(region);
        regionInstance.save(function (err) {
            callback(err);
        })
    }, function (err) {
        
    })
}

function MongoConnector() {
    var userScheme = new Schema({
        name: String,
        age: Number
    });
    loadRegion();
    // mongoose.connect("mongodb://localhost:27017/mycaDB");

    // var User = mongoose.model("User", userScheme);
    // var user = new User({
    //     name: "Bill",
    //     age: 41
    // });
    //
    // user.save(function(err){
    //     mongoose.disconnect();  // отключение от базы данных
    //
    //     if(err) return console.log(err);
    //     console.log("Сохранен объект", user);
    // });


    // var regionSchema = new Schema({
    //     name: {
    //         type: String,
    //         required:true
    //     },
    //     russianName: {
    //         type:String
    //     },
    //     extremeCoordinates: { type : Array , "default" : [] }
    // });
    //
    // var RegionModel = mongoose.model('region', regionSchema);
    // var region = new RegionModel({
    //     name: 'Center',
    //     russianName: 'Центр Харькова',
    //     extremeCoordinates: [
    //         {
    //             label: 'mSov',
    //             lat: '49.991656',
    //             lon: '36.231902'
    //         },
    //         {
    //             label: 'mNayk',
    //             lat: '50.012935',
    //             lon: '36.226978'
    //         },
    //
    //         {
    //             label:'mPyshk',
    //             lat: '50.004102',
    //             lon: '36.247875'
    //         },
    //         {
    //             label: 'Porshe',
    //             lat: '50.004102',
    //             lon: '36.247875'
    //         }]
    // });
    // region.save(function (err) {
    //     mongoose.disconnect();
    //
    // })
    //
    // var markerSchema = new Schema({
    //     name: {
    //         type: String,
    //         required:true
    //     },
    //     russianName: {
    //         type:String
    //     },
    //     institutionWithLocation: { type : Array , "default" : [] }
    // });
    //
    // var markerModel = mongoose.model('marker', markerSchema);
    // var marker = new markerModel ({
    //     //улица сумская 2  телефон +38057-766-90-31 работает с все дни 8-23         name: 'mSov',
    //     russianName: 'метро Cоветская',
    //     institutionWithLocation: [
    //         {
    //             name: 'Puzata Hata',
    //             lon: '36.232352',
    //             lat: '49.993312',
    //             categories: [
    //                 {name:"Burgers", rating: '10'},
    //                 {name:"Pizza", rating: '7'},
    //                 {name:"Sushi", rating: '6'},
    //                 {name:"Breakfast", rating: '7'},
    //                 {name:"Dinner", rating: '7'},
    //                 {name:"Lunch", rating: '7'},
    //                 {name:"Hookah", rating: '7'},
    //                 {name: "Gastro Pub", rating: '3'},
    //                 {name: "Steaks", rating: '4'},
    //                 {name: "Desserts", rating: '5'}
    //             ]
    //
    //         },
    //         {
    //             name: 'Vareniki',
    //             lon: '36.231938',
    //             lat: '49.993604'
    //         },
    //         {
    //             name: 'FreshLine',
    //             lon:'36.230553',
    //             lat: '49.992598'
    //         }
    //         ,
    //         {
    //             name: 'Tratoria',
    //             lon: '36.230553',
    //             lat: '49.992598'
    //         }
    //         ]
    // });
    // marker.save(function (err) {
    //     mongoose.disconnect();
    //
    // })
}

module.exports = new MongoConnector();