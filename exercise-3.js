// Exercise 3 - `getAddressPosition`
// ---------------------------------
const env = require("dotenv");
env.config();
const rp = require("request-promise");
const Darksky = require("darkskyjs");

const myKey = process.env.DARKSKY_API_KEY;
// const lat = 42;
// const lon = -72;

// Given a position (latitude and longitude), returns the temperature.

function getCurrentTemperatureAtPosition(position) {
    return rp(
        "https://api.darksky.net/forecast/" +
            myKey +
            "/" +
            position.lat +
            "," +
            position.lng
    )
        .then(function (res) {
            // console.log(res.currently.temperature);
            return JSON.parse(res);
        })
        .then(function (data) {
            console.log(data.currently.temperature);
            return data.currently.temperature;
        })
        .catch(function (err) {
            console.log(err);
        });
}
//getCurrentTemperatureAtPosition();

module.exports = { getCurrentTemperatureAtPosition };
