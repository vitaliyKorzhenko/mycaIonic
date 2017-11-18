var locationUserSchema = {
    login: {
        type: String,
        required:true
    },
    lat: {
        type:String,
        required:true
    },
    lon: {
        type:String,
        required:true
    }
};


module.exports = new Schema(locationUserSchema);