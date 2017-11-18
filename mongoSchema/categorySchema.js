var categorySchema = {
    name: {
        type: String,
        required:true
    },
    russianName: {
        type:String
    }

};

module.exports =  new Schema(categorySchema);