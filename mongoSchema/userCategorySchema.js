var userCategorySchema = {
    login: {
        type: String,
        required:true
    },
    nameCategory: {
        type:String
    },
    rating: {
        type: Number
    }
};

module.exports =  new Schema(userCategorySchema);
