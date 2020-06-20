// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

// external package add

const dotenv = require('dotenv').config();
const rp = require('request-promise');
const NodeGeocoder = require('node-geocoder');

// pull address conversion module from ex 3

let getCurrentTemperatureAtPosition = require('./exercise-3.js');

// reimplement address lookup, since ex 2 doesn't return a promise object
// and I want the promise. it shall be mine.

// init geocoder

let geocoder = NodeGeocoder({
    provider: 'opencage',
    apiKey: process.env.OPENCAGE_API_KEY
});

function getAddressPosition(address) {
    console.log("converting address to latlong");
    // returns a promise, in theory?
    return geocoder.geocode(address)
        .then(response => {
            return {
                // assume first response is most likely correct location
                // this is probably pretty frustrating for folks living in other namesake cities
                // but, well.
                lat: response[0].latitude,
                lng: response[0].longitude
            }
        })
        .catch(error => console.log(error.message));
}

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
    return getAddressPosition(address)
        .then(data => {
            return getCurrentTemperatureAtPosition([data.lat, data.lng])
                .then(response => {
                    return response;
                });
        })
}

getCurrentTemperature("Toronto")
    .then(response => console.log(response));