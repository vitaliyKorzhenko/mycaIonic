var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var institution = {
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    russianName: {
        type: String
    },
    dataAboutWork: {
        type: String
    },
    lat: {
        type: String
    },
    lon: {
        type: String
    }
}
module.exports = new Schema(institution);