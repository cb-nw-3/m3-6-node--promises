// Exercise 3 - `getAddressPosition`
// ---------------------------------
require('dotenv').config()

const rp = require('request-promise');
const darksky = process.env.DARKSKY_API_KEY

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(latitude, longitude) {
    // https://api.darksky.net/forecast/[key]/[latitude],[longitude]
    return rp(`https://api.darksky.net/forecast/${darksky}/${latitude},${longitude}`)
        .then(res => {
            // console.log(JSON.parse(res));
            return JSON.parse(res);
        })
        .then(position => {
            // console.log(position.currently);
            return position.currently.temperature
        })
        .catch(error => console.log('error', error));
}

getCurrentTemperatureAtPosition('45.575988', '-73.441396').then((res) => console.log(res));
getCurrentTemperatureAtPosition('19.432608', '-99.133208').then((res) => console.log(res));
