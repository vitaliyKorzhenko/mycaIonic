var promise = require('promise');

var validator = require('validator');

var bcrypt = require('bcrypt');


var ErrorFactory  = require('../ErrorFactory');

var UserSchema = require('../mongoSchema/userSchema');

var MobileUserSchema = require('../mongoSchema/mobileUserSchema');

var LocationUserSchema = require('../mongoSchema/locationUserSchema');

function UserController() {

}

UserController.prototype.saveLocation = function (userLocation) {
     return new Promise(function (resolve, reject) {
         var LocationUser = mongoose.model('LocationUser', LocationUserSchema);
         var locationUser = new LocationUser({
             login: userLocation.login,
             lat: userLocation.lat,
             lon: userLocation.lon
         });
         locationUser.save(function (err) {
             if (err) {
                 reject(err);
             }
             resolve('saved location');
         })
     })
}



UserController.prototype.userLogin = function (loginInfo) {
    return new Promise(function (resolve, reject) {
        var err = isCorrectLogin(loginInfo);
        if(err !== '') reject(err);
        var MobileUser = mongoose.model('MobileUser', MobileUserSchema);
        MobileUser.findOne({$or: [{email: loginInfo.login},{phoneNumber: loginInfo.phoneNumber}]},
            function (err, user) {
            if (err) {
                reject(err);
            }
            if (user) {
                bcrypt.compare(loginInfo.password, user.password, function(err, result) {
                    if (err) reject (err);
                    else {
                        if (result === true) {
                            resolve(user);
                        }
                        else {
                            resolve("Login Failed. Login or Password incorrect");
                        }
                    }
                })
            }
        })
    })
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
                            if (result === true) {
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


// "fistName": "William",
//     "lastName": "Worner",
//     "email": "william.worner@gmail.com",
//     "password": "q1w2e3r4t5y6",
//     "birthday": "16.12.1993",
//     "gender": "m",
//     "phoneNumber": "+380669947651"
//


function saveMobileUser(newUser, hash) {
    return new Promise(function (resolve, reject) {
        var MobileUser = mongoose.model('MobileUser', MobileUserSchema);
        var mobileUser = new MobileUser({
            email: newUser.email,
            password: hash,
            phoneNumber: newUser.phoneNumber
        });
        mobileUser.save(function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(mobileUser);
            }

        })
    })
}

UserController.prototype.registrationNewUser = function (newUser) {

    console.log("registration new user: " + JSON.stringify(newUser));
    return new Promise(function (resolve, reject) {
        var error = isCorrectNewUser(newUser);
        if (error !== "") { reject(error) }
        else {
            var User = mongoose.model("User", UserSchema);
            User.find({$or: [{email: newUser.email}, {phoneNumber: newUser.phoneNumber}]}, function (err, docs) {
                if (err) {
                    reject(err);
                }
                else {
                    if (docs && docs.length > 0 ) {
                        reject("user already exist");
                    } else {
                        bcrypt.hash(newUser.password, 12, function (err, hash) {
                            var user = new User ({
                                firstName: newUser.firstName,
                                lastName: newUser.lastName,
                                email: newUser.email,
                                password: hash,
                                birthday: newUser.birthday,
                                gender: newUser.gender,
                                phoneNumber: newUser.phoneNumber
                            });
                            user.save(function (err) {
                                if (err) {
                                    reject(err);
                                }
                                saveMobileUser(newUser, hash).then(function (mobileUser) {
                                    if (mobileUser) {
                                        resolve(mobileUser);
                                    }

                                },function (err) {
                                    reject(err);
                                })
                                //TODO: return user 
                                resolve(newUser);
                            })
                            newUser.password = newUser.hash;
                            User.save(newUser)
                        })
                    }
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