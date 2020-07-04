// Exercise 3 - `getAddressPosition`
// ---------------------------------
const DarkSkyApi = require('dark-sky-api');
require('dotenv').config();
const rp = require('request-promise');
const key = process.env.DARKSKY_API_KEY;

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {

    const latitude = position.lat;
    const longitude = position.lng;

    return rp(`https://api.darksky.net/forecast/${key}/${latitude},${longitude}`)
        .then( jsonObj => {
            return  JSON.parse(jsonObj);
        })
        .then( parsedObj => {
            const temp = parsedObj.currently.temperature;
            return temp;
        })
        .catch((error) => console.log(error));
}

// getCurrentTemperatureAtPosition({lat:41.075284,lng:-89.384318});

module.exports = {getCurrentTemperatureAtPosition};