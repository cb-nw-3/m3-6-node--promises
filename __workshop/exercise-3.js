

// Exercise 3 - `getAddressPosition`
// ---------------------------------

// Given a position (latitude and longitude), returns the position


var rp = require('request-promise');
require('dotenv').config();

let darkSkyKey = process.env.DARKSKY_API_KEY;
 const request = require('request');




let request_string =  'https://api.darksky.net/forecast/'+darkSkyKey+'/42.3601,-71.0589';

// so this request-string works, but man.  What a pain.

//  request(request_string, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body);
//   console.log(body.explanation);
// });


var options = {
    uri: request_string
};

// qs in the rp options obejct don't seem to work with DarkSky, I keep getting a rejection.  Just sending a pure uri string works - which is weird to me because isn't the API KEY sent in the open?

function getCurrentTemperatureAtPosition() {
    return rp(options)
        .then (position => {
            let data = JSON.parse(position);
            console.log(data.currently.temperature)});

}

  getCurrentTemperatureAtPosition();







