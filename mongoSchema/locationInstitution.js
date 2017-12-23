var locationInstitutionSchema = {
        label: {
            type: String,
            required:true
        },
        lon: {
            type:String
        },
        lat: {
            type:String
        }
};

module.exports =  new Schema(locationInstitutionSchema);
