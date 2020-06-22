// Exercise 3 - `getAddressPosition`
// ---------------------------------
const request = require('request-promise');
require('dotenv').config()
const ApiKey = process.env.DARKSKY_API_KEY

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(latitude, longitude) {
    return request(`https://api.darksky.net/forecast/${ApiKey}/${latitude},${longitude}`)
        .then(response => {
            return JSON.parse(response);
        })
        .then(location => {
            // console.log(location.currently.temperature);
            return location.currently.temperature
        })
        .catch(error => console.log('error', error));
}
getCurrentTemperatureAtPosition('41.7807', '-38.3815').then((data) => console.log(data));
