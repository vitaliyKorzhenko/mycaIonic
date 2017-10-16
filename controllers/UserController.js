var promise = require('promise');

var validator = require('validator');

var bcrypt = require('bcrypt');


var ErrorFactory  = require('../ErrorFactory');

//models
var User = require('../db/models').User;




function UserController() {
}



UserController.prototype.login = function (loginInfo) {
     
    return new Promise( function (resolve, reject) {
        var error = isCorrectLogin(loginInfo);
        if (error !== "") reject(error);
        else {
            User.findOne({where: {
                $or: [
                    {
                        email:
                            {
                                $eq: loginInfo.login
                            }
                    },
                    {
                        phoneNumber:
                            {
                                $eq: loginInfo.login
                            }
                    }

                ]
            }}).then(function (user) {
                if (user !== null) {
                    bcrypt.compare(loginInfo.password, user.password, function(err, result) {
                        if (err) reject (err);
                        else {
                            if (result == true) {
                                resolve("Login SUCCESS!");
                            }
                            else {
                                resolve("Login Failed. Login or Password incorrect");
                            }
                        }
                    })
                }
                else {
                    resolve("Login Failed. Login or Password incorrect");
                }
            })
        }
    })
}




UserController.prototype.registrationNewUser = function (newUser) {

    // "fistName": "William",
    //     "lastName": "Worner",
    //     "email": "william.worner@gmail.com",
    //     "password": "q1w2e3r4t5y6",
    //     "birthday": "16.12.1993",
    //     "gender": "m",
    //     "phoneNumber": "+380669947651"
    //
    return new Promise(function (resolve, reject) {

        var error = isCorrectNewUser(newUser);
        console.log("Error by Correct!" + JSON.stringify(error));
        if (error !== "") { reject(error) }
        else {
            User.findOne({where: {
                $or: [
                    {
                        email:
                            {
                                $eq: newUser.email
                            }
                    },
                    {
                        phoneNumber:
                            {
                                $eq: newUser.phoneNumber
                            }
                    }

                ]
            }}).then(function (user) {
                if (user !== null) {
                    reject("user already exist");
                }
                else {

                    bcrypt.hash(newUser.password, 12, function(err, hash) {
                        if (err) {reject(err)}
                        else {
                            User.create({
                                firstName: newUser.firstName,
                                lastName: newUser.lastName,
                                email: newUser.email,
                                password: hash,
                                birthday: newUser.birthday,
                                gender: newUser.gender,
                                phoneNumber: newUser.phoneNumber
                            }).then(function (createdUser) {
                                if (createdUser) {
                                    resolve(createdUser);
                                }

                            }, function (error) {
                                reject(error);
                            })
                        }
                    });
                }
            })
        }
    })
}



function isCorrectNewUser(newUser) {
    console.log("new User: " + newUser.firstName);
    // "fistName": "William",
    //     "lastName": "Worner",
    //     "email": "william.worner@gmail.com",
    //     "password": "q1w2e3r4t5y6",
    //     "birthday": "16.12.1993",
    //     "gender": "m",
    //     "phoneNumber": "+380669947651"
    //
    if (!newUser.firstName) {
        return ErrorFactory.createErrorMessageIsEmpty('firstName');
    }

    if (!newUser.lastName) {
        return ErrorFactory.createErrorMessageIsEmpty('lastName');
    }

    if (!newUser.email) {
        return ErrorFactory.createErrorMessageIsEmpty('email');
    }
    else {
        if (!validator.isEmail(newUser.email)){
            return ErrorFactory.createErrorMessageIncorrectFormat("email");
        }
    }


    if (!newUser.password) {
       return ErrorFactory.createErrorMessageIsEmpty("password");
    }

    if (!newUser.phoneNumber) {
        return ErrorFactory.createErrorMessageIsEmpty("phoneNumber");
    }
    else {
        if(!validator.isMobilePhone(newUser.phoneNumber,'uk-UA')) {
            return ErrorFactory.createErrorMessageIncorrectFormat("phoneNubmer");
        }
    }
    return "";
}

function isCorrectLogin(loginInfo) {

    if (!loginInfo.login) {
        return ErrorFactory.createErrorMessageIsEmpty('login');
    }

    if (!loginInfo.password) {
        return ErrorFactory.createErrorMessageIsEmpty('password');
    }

    return "";
}

module.exports = new UserController();