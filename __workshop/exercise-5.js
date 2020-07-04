// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
const rp = require('request-promise');
const opencage = require('opencage-api-client');
require('dotenv').config();
const {getIssPosition} = require('./exercise-1');
const {getAddressPosition} = require('./exercise-2');

function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getDistanceFromIss(address) { 

    return Promise.all([getIssPosition(),getAddressPosition(address)]) //The Promise.all() method takes an iterable of promises as an input, and returns a single Promise as an output.
        .then((values)=> {
            return getDistance(values[0], values[1]);
        })  
        .then( dist => {
            console.log(dist);
            return dist;
        })
        .catch((error) => console.log(error));
    }

// getDistanceFromIss('1150 Van Horne, Montréal, QC H2S 2X7');