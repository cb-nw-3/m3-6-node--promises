// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function

require('dotenv').config();

const rp = require('request-promise');
const darksky = process.env.DARKSKY_API_KEY
const opencage = require('opencage-api-client');


function getCurrentTemperature(address) {

    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };

    return opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0];
                    // console.log(place.geometry)
                    return place.geometry;
                }
            } else {
                console.log('error',  data.status.message);
            }
        })
        .then(result => {
            return rp(`https://api.darksky.net/forecast/${darksky}/${result.lat},${result.lng}`)
        })
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

getCurrentTemperature('100 Peel St Suite 300, Montreal, Quebec H3C 0L8').then((res) => console.log(res));
getCurrentTemperature('1 Market #500, San Francisco, CA 94105, États-Unis').then((res) => console.log(res));

