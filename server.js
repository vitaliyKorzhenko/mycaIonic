var app = require('express')();
var debug = require('debug')('serverciy:server');
var http = require('http');
var models = require('./db/models');
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
/**
 * Listen on provided port, on all network interfaces.
 */
 var UserController = require('./controllers/UserController');
var io = require('socket.io')(server);

models.sequelize.sync({force:true}).then(function() {
    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(3000, function() {
        debug('Express server listening on port ' + server.address().port);
    });
    server.on('error', onError);
    server.on('listening', onListening);


    io.on('connection', function(socket){
        console.log('a user connected');


        socket.on('userLogin',function (data) {
            console.log("userLogin Data: " + JSON.stringify(data));
        })

    });


});


//
// server.listen(3000);
// server.on('error', onError);
// server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */



app.get('/', function(req, res){

    console.log("local get");

    var user = {
       firstName: "William",
        lastName: "Worner",
        email: "william.worner@gmail.com",
        password: "q1w2e3r4t5y6",
        birthday: "16.12.1993",
        gender: "m",
        phoneNumber: "+380669947651"
    }

    UserController.registrationNewUser(user).then(function (createdUser) {
            console.log("CREATED USER: " + JSON.stringify(createdUser));
        },
        function (error) {
            console.log("error" + error);
        })


    res.send("dsfdsfds")
    // res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req, res){

    console.log("login!");
    //phoneNumber: "+380669947651"

    var loginInfo = {
        login: "william.worner@gmail.com",
        password: "q1w2e3r4t5y632"
    }

    UserController.login(loginInfo).then(function (result) {
            console.log("Login Result: " + result);
        },
        function (error) {
            console.log("error" + error);
        })


    res.send("logoin")
    // res.sendFile(__dirname + '/index.html');
});














function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);

    console.log("SERVER LIST PORT 3000");
}








//
//
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//

//
//
// http.listen(1234, function(){
//     console.log('listening on *:3000');
// });

