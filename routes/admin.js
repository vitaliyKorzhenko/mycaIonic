var express = require('express');
var router = express.Router();

var InstitutionController = require('../controllers/InstitutionController');

var CategoryController = require('../controllers/CategoryController');


var QuestionController = require('../controllers/QuestionController');


// /* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin');
})

router.get('/category', function(req, res, next) {
    res.render('category');
})


router.post('/category/loadDefaultCategory', function (req, res, next) {
    console.log("load default category");
    CategoryController.createDefaultCategories().then(function (value) {

            if(value) {
                res.status(200);
                res.send(value);
            }
        },

        function (err) {
            res.status(500);
            res.send(err);
        })

})

router.post('/category/showAllCategories', function (req, res, next) {
    console.log("show All Categories");

    CategoryController.returnAllCategories().then(function (value) {
            if(value) {
                res.status(200);
                res.send(value);
            }
        },
        function (err) {
            res.status(500);
            res.send(err);
        })
})

router.post('/category/loadDefaultQuestions', function (req, res, next) {
    console.log("load default questions");

    QuestionController.saveDefaultQuestion().then(function (value) {
        if(value) {
            res.status(200);
            res.send(value);
        }
    }, function (err) {
        res.status(500);
        res.send(err);
    })
})


router.post('/createCategory', function (req, res, next) {

    console.log("create category" + JSON.stringify(req.body));
    var category = {
        name: req.body.name
    }
    if (category)
    {
        CategoryController.createNewCategory(category.name).then(function (category) {
            if (category) {
                res.status(200);
                res.send(category);}
            },
            function (err) {
                res.status(403);
                res.send(err);
            })
    }
})

router.post('/createInstitution', function (req, res, next) {
    console.log("login REQUEST" + JSON.stringify(req.body));
    var institution = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    }
    if (institution) {
        InstitutionController.createInstitution(institution).then(function (institution) {
                res.status(200);
                res.send(institution);
                },
            function (error) {
                res.status(403);
                res.send(error);
            })
    }


})


module.exports = router;