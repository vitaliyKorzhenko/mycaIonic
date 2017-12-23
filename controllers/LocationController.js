
var promise = require('promise');
var regionSchema = require('../mongoSchema/region');

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var LocationService = require('../services/locationService');

mongoose.Promise = global.Promise;

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

function LocationController() {
    console.log('location controller');

    mongoose.connect("mongodb://localhost:27017/mycaDB");
    getNearInstitution('49.992774', '36.219737').then(function (response) {
        console.log('ближайшие заведения');
        console.log(JSON.stringify(response));
    }, function (err) {
        console.log(err);
    })
}


function getNearInstitution(lat, lon) {
    return new Promise (function (resolve, reject) {

        var markerSchema = new Schema({
            name: {
                type: String,
                required:true
            },
            russianName: {
                type:String
            },
            institutionWithLocation: { type : Array , "default" : [] }
        });
        var markerModel = mongoose.model('marker', markerSchema);

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


        var Region = mongoose.model('region', regionSchema);
        Region.findOne({ name: 'Center'}, function (err, doc){
            if (err) {
                reject(err);
            } else {
                if (doc) {
                    var minimun = 1000000;
                    var resultMarker = {};
                    var markers = doc.extremeCoordinates;
                    markers.forEach(function (marker) {
                        console.log('marker label!' + marker.label);
                        var dist = LocationService.geoDistance(lat, lon, marker.lat, marker.lon);
                        if (dist < minimun) {
                            minimun = dist;
                            resultMarker = marker;
                        }
                        if (marker) {
                            markerModel.findOne({name: marker.label}, function (err, doc) {
                                if (err) {
                                    reject(err);
                                }else {
                                    resolve(doc);
                                }
                            })
                        } else {
                            resolve('voy voy voy');
                        }
                    })
                }
                // resolve(resultMarker);
            }
        });
        // Region.find({where: {'name': 'Center'}} , function (err, docs) {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         resolve(docs);
        //     }
        // })
    })
 }

LocationController.prototype.saveNewRegion = function () {
    return new Promise (function (resolve, reject) {



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

        var RegionModel = mongoose.model('RegionModel', regionSchema);
        var region = new RegionModel({
            name: 'Center',
            russianName: 'Центр Харькова',
            extremeCoordinates: [
                {
                label: 'mSov',
                lat: '49.991656',
                lon: '36.231902'
                },
                {
                    label: 'mNayk',
                    lat: '50.012935',
                    lon: '36.226978'
                },

                {
                    label:'mPyshk',
                    lat: '50.004102',
                    lon: '36.247875'
                },
                {
                    label: 'Porshe',
                    lat: '50.004102',
                    lon: '36.247875'
                }]
        });
        region.save(function (err) {
            if (err) {
                reject(err);
            }
            resolve('saved region');
        })
    })
}




module.exports = new LocationController();