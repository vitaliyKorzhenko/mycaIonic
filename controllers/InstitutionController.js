var promise = require('promise');

var Institution = require('../db/models').Institution;

var InstitutionSchema = require('../mongoSchema/institutionSchema');

function InstitutionController() {
    
}


InstitutionController.prototype.createInstitution = function (institution) {
    return new Promise (function (resolve, reject) {
        var Institution = mongoose.model('Institution', InstitutionSchema);
        var institution = new Institution (institution);
        institution.save(function (err) {
            if (err) reject(err);
            resolve('save institution success');
        })
    })
}


InstitutionController.prototype.createInstitution = function (institution) {
    
    return new Promise (function (resolve, reject) {
        Institution.create({
            name: institution.name,
            address: institution.address,
            phone: institution.phone
        }).then(function (createdInstitution) {
            if (createdInstitution) {
                resolve(createdInstitution);
            }

        }, function (error) {
            reject(error);
        })
    })
}

module.exports = new InstitutionController();