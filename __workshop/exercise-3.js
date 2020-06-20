// Exercise 3 - `getAddressPosition`
// ---------------------------------
const dotenv = require('dotenv');
dotenv.config();
const request = require('request-promise');



// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
    let key = process.env.DARKSKY_API_KEY;

    return request(`https://api.darksky.net/forecast/${key}/${position.latitude},${position.longitude}`)
    

}

const position = {
    latitude: 70,
    longitude: 80
}

getCurrentTemperatureAtPosition(position)
    .then(result => console.log(result))