// Exercise 3 - `getAddressPosition`
// ---------------------------------

// require stuff

const rp = require('request-promise');
const dotenv = require('dotenv').config();

// rp options & parameter init

let options = {
    uri: 'https://api.openweathermap.org/data/2.5/weather',
    qs: {
        appid: process.env.OPENWEATHER_API_KEY,
        units: "metric"
    },
    json: true // OMG, rp parses JSON automatically, that's great
}

// the problem is, how do I add a custom long/lat parameter to options?
// wait. options is an object. so is qs. can't I just arbitrarily add stuff?
// let us meditate upon this possibility.

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
    options.qs.lat = position[0];
    options.qs.lon = position[1];
    return rp(options)
        .then(response => {
            return response.main.temp;
        })
        .catch(error => console.log(error.message));
}

getCurrentTemperatureAtPosition([139.0, 35.0]);

module.exports = getCurrentTemperatureAtPosition;