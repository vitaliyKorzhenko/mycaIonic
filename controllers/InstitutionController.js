var promise = require('promise');

var Institution = require('../db/models').Institution;


function InstitutionController() {
    
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