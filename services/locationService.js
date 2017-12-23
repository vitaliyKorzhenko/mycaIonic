var math = require('mathjs');

var pi = require('const-pi');

var geodist = require('geodist');

function LocationService () {

}



LocationService.prototype.geoDistance = function(latA, lonA, latB, lonB) {
    var dist = geodist({lat: latA, lon:lonA}, {lat: latB, lon: lonB})
    console.log(dist);
    return dist;
}


// lat = 45.058671
//lon = 41.995445

LocationService.prototype.calculateDistance = function(lat1, lon1, lat2, lon2) {
    var EARTH_RADIUS = 6372795;
    //go to radian
    var latA = (lat1 * pi) /180;
    var latB = (lat2 * pi) / 180;
    var longA = (lon1 * pi)/180;
    var longB = (lon2 * pi)/180;
    var cosA = math.cos(latA);
    var sinA = math.sin(longA);
    var cosB = math.cos(latB);
    var sinB = math.sin(longB);
    var delta = longB - longA;
    var cdelta = math.cos(delta);
    var sdelta = math.sin(delta);

    var y = math.sqrt(math.pow(cosB * sdelta, 2) + math.pow(cosA * sinB - sinA * cosB * cdelta, 2));
    var x = sinA * sinB + cosA * cosB * cdelta;
    var ad = math.atan2(y, x);
    var dist = ad * EARTH_RADIUS;
    console.log('dist' + dist);
    return dist;
}

function getNearInstitution(la) {
}


module.exports = new LocationService();