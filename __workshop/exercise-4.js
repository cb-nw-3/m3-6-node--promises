// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
const rp = require('request-promise');
const opencage = require('opencage-api-client');
const DarkSkyApi = require('dark-sky-api');
require('dotenv').config();
const {getAddressPosition} = require('./exercise-2');
const {getCurrentTemperatureAtPosition} = require('./exercise-3');

function getCurrentTemperature(address) {
    return getAddressPosition(address)
    .then( coord => {
        return getCurrentTemperatureAtPosition(coord)})
    .then(temp => console.log(temp))
    .catch((error) => console.log(error));
}

getCurrentTemperature('1150 Van Horne, Montréal, QC H2S 2X7');