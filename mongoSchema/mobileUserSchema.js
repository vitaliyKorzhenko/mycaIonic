var mobileUserSchema = {
    email: {
        type: String,
        required:true
    },
    phoneNumber: {
        type:String,
        required:true,
    },
    password: {
        type:String
    }
};


module.exports =  new Schema(mobileUserSchema);