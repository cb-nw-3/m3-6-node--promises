// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
const request = require('request-promise');
require('dotenv').config()
const ApiKey = process.env.DARKSKY_API_KEY

const { getAddressPosition } = require('./exercise-2');

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
    return getAddressPosition(address)
        .then(result => {
            console.log(request);
            return request(`https://api.darksky.net/forecast/${ApiKey}/${result.lat},${result.lng}`)
        })
        .then(response => {
            return JSON.parse(response);
        })
        .then(location => {
            // console.log(location.currently.temperature);
            return location.currently.temperature
        })
        .catch(error => console.log('error', error));
}

getCurrentTemperature('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
    .then((data) => console.log(data));