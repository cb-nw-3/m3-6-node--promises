// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

const rp = require('request-promise');
const dotenv = require('dotenv').config();
const NodeGeocoder = require('node-geocoder');

// reimplement to return a promise

function getIssPosition() {
    return rp('http://api.open-notify.org/iss-now.json')
        .then(response => {
            let locationISS = JSON.parse(response);
            return {
                lat: locationISS.iss_position.latitude,
                lng: locationISS.iss_position.longitude
            }
        });
};

// geocoder init

let geocoder = NodeGeocoder({
    provider: 'opencage',
    apiKey: process.env.OPENCAGE_API_KEY
});

function getAddressPosition(address) {
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

// getAddressPosition('Seoul').then(data => console.log(data));

// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
    return Promise.all([getIssPosition(), getAddressPosition(address)])
        .then(values => {
            return getDistance(values[0], values[1]);
        });
}

getDistanceFromIss('Beijing').then(data => console.log(data));