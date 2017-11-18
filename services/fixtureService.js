
function  FixtureService() {
    
}


function createUserFixtures() {
    var userFixtures =[
        {
            "model": "User",
            "data": {
                "firstName": "Vitaliy",
                "lastName": "Korzhenko",
                "password": "q1w2e3r4t5y6",
                "email": "vitaliykorzenkoua@gmail.com",
                "birthday": "1993-12-16",
                "gender": "m",
                "phoneNumber": "+380669947651"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Burgers",
                "russianName": "Бургеры"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Pizza",
                "russianName": "Пицца"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Sushi",
                "russianName": "Cуши"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Breakfast",
                "russianName": "Завтрак"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Dinner",
                "russianName": "Ужин"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Lunch",
                "russianName": "Ланч"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Hookah",
                "russianName": "Кальян"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Gastro Pub",
                "russianName": "Гастро Паб"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Steaks",
                "russianName": "Cтейки"
            }
        },
        {
            "model": "category",
            "data": {
                "name": "Desserts",
                "russianName": "Десерты"
            }
        },
        {
            "model": "Institution",
            "data": {
                "name": "Churrasko Bar",
                "russianName": "Чурраско Бар",
                "phone": "+380675785665",
                "address": "Ул. Пушкинская, 22, Харьков",
                "dataAboutWork": "понедельник 11–2, вторник 11–2, среда 11–2, четверг 11–2, пятница 11–4, суббота 11–4, воскресенье 11–0",
                "latitude": "49.994405",
                "longitude": "36.235788"
            }
        },
        {
            "model": "Institution",
            "data": {
                "name": "two9",
                "russianName": "Две девятки",
                "phone": "+380671568450",
                "address": "Ул. Маршала Бажанова, 7, Харьков",
                "dataAboutWork": "понедельник 10–23, вторник 10–23, среда 10–23, четверг 10–23, пятница 10–23, суббота 10–23, воскресенье 10–23",
                "latitude": "49.996541",
                "longitude": "36.241432",
            }
        },
        {
            "model": "Institution",
            "data": {
                "name": "Meet&Meat",
                "russianName": "Meet&Meat",
                "phone": "+380960592288",
                "address": "Ул. Маршала Бажанова, 12, Харьков",
                "dataAboutWork": "понедельник 10–22, вторник 10–22, среда 10–22, четверг 10–22, пятница 10–22, суббота 10–22, воскресенье 10–22",
                "latitude": "49.995784",
                "longitude": "36.240394",
                "category": "Гастро Паб"
            }
        }

    ]


    //
    // {
    //     "ints":[
    //     {
    //         "name ru": "Чурраско Бар",
    //         "phone": "+380 67 578 5665",
    //         "address": "Ул. Пушкинская, 22, Харьков",
    //         "dataAboutWork": "понедельник 11–2, вторник 11–2, среда 11–2, четверг 11–2, пятница 11–4, суббота 11–4, воскресенье 11–0",
    //         "latitude": "49.994405",
    //         "langitude": "36.235788",
    //         "category": "Бургеры, Стейки, Завтраки, Бизнес Ланчи, Ужины, Гастро Паб"
    //         "menu": ""
    //     },
    //     {
    //         "name ru": "Две девятки",
    //         "phone": "+380 67 156 8450",
    //         "address": "Ул. Маршала Бажанова, 7, Харьков",
    //         "dataAboutWork": "понедельник 10–23, вторник 10–23, среда 10–23, четверг 10–23, пятница 10–23, суббота 10–23, воскресенье 10–23",
    //         "latitude": "49.996541",
    //         "langitude": "36.241432",
    //         "category": "Пиво, Гастро Паб"
    //         "menu": ""
    //     },
    //     {
    //         "name ru": "Meet&Meat",
    //         "phone": "+380 96 059 2288",
    //         "address": "Ул. Маршала Бажанова, 12, Харьков",
    //         "dataAboutWork": "понедельник 10–22, вторник 10–22, среда 10–22, четверг 10–22, пятница 10–22, суббота 10–22, воскресенье 10–22",
    //         "latitude": "49.995784",
    //         "langitude": "36.240394",
    //         "category": "Гастро Паб"
    //         "menu": ""
    //     }
    // ]
    // }
    return userFixtures;
}

function createCategoryFixtures() {
    var categoryFixtures = [];
    var arrayCategories = [
        {name:"Burgers", russianName: 'Бургеры'},
        {name:"Pizza", russianName: 'Пицца'},
        {name:"Sushi", russianName: 'Суши'},
        {name:"Breakfast", russianName: 'Завтрак'},
        {name:"Dinner", russianName: 'Ужин'},
        {name:"Lunch", russianName: 'Ланч'},
        {name:"Hookah", russianName: 'Кальян'},
        {name: "Gastro Pub", russianName: 'Гастро Паб'},
        {name: "Steaks", russianName: 'Cтейки'},
        {name: "Desserts", russianName: 'Десерты'}
        15
    ];

}


FixtureService.prototype.createDefaultFixtures = function () {

    var defaultFixtures = createUserFixtures();


    return defaultFixtures;
}

module.exports = new FixtureService();