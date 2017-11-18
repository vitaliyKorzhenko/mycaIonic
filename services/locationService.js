var math = require('mathjs');

var pi = require('const-pi');

var geodist = require('geodist');

function LocationService () {
    // $lat1 = 77.1539;
    // $long1 = -139.398;
    // $lat2 = -77.1804;
    // $long2 = -139.55;
    var locA = {
        x:41.995445,
        y:45.058671
    };
    var locB = {
        x:36.241432,
        y:49.996541

    };
    var distance = calculateDistance(locA, locB);
    console.log('location service');
    console.log(distance);
}

function geoDistance() {
    var dist = geodist({lat: 45.058671, lon: 41.995445}, {lat: 49.996541, lon: 36.241432})
    console.log(dist);
    return dist;
}

LocationService.prototype.getDistance = function (locA, locB) {
    var distance = calculateDistance(locA, locB);
    return distance;
}
// lat = 45.058671
//lon = 41.995445
function calculateDistance(locA,locB) {
    var EARTH_RADIUS = 6372795;
    //go to radian
    var latA = (locA.x  * pi) /180;
    var latB = (locB.x * pi) / 180;
    var longA = (locA.y * pi)/180;
    var longB = (locB.y * pi)/180;
    var cosA = math.cos(latA);
    var sinA = math.sin(longA);
    var cosB = math.cos(latB);
    var sinB = math.sin(longB);
    var delta = longB - longA;
    var cdelta = math.cos(delta);
    var sdelta = math.sin(delta);

    // $y = sqrt(pow($cl2 * $sdelta, 2) + pow($cl1 * $sl2 - $sl1 * $cl2 * $cdelta, 2));
    // $x = $sl1 * $sl2 + $cl1 * $cl2 * $cdelta;

    var y = math.sqrt(math.pow(cosB * sdelta, 2) + math.pow(cosA * sinB - sinA * cosB * cdelta, 2));
    var x = sinA * sinB + cosA * cosB * cdelta;
    var ad = math.atan2(y, x);
    var dist = ad * EARTH_RADIUS;
    return dist;
}
module.exports = new LocationService();