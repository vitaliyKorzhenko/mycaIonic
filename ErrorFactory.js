function ErrorFactory() {

}

 ErrorFactory.prototype.createErrorMessageIsEmpty = function(nameElement) {
     if (nameElement) {
        var error = {
            type: "isEmpty",
            nameElement: nameElement,
            message: nameElement + " is empty"
        };
        return error;
    }
}

ErrorFactory.prototype.createErrorMessageIncorrectFormat = function (nameElement) {
    if (nameElement) {
        var error = {
            type: "IncorrectFormat",
            nameElement: nameElement,
            message: nameElement + "have an incorrect format"
        }
       return error;
    }

}



module.exports = new ErrorFactory();