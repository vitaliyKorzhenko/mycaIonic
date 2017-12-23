var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var regionSchema = {
    name: {
        type: String,
        required:true
    },
    russianName: {
        type:String
    },
    extremeCoordinates: { type : Array , "default" : [] }
};

module.exports =  new Schema(regionSchema);




//Sovet 49.991656 36.231902

//Na 50.012935 36.226978



//p 50.004102 36.247875

//50.002567 36.217537 porshe D label