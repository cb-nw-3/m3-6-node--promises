// Exercise 3 - `getAddressPosition`
// ---------------------------------
const env = require("dotenv");
env.config();
const rp = require("request-promise");
const Darksky = require("darkskyjs");

const myKey = process.env.DARKSKY_API_KEY;
const lat = 42;
const lon = -72;

const options = {
    uri:
        "https://api.darksky.net/forecast//42,-72",
    headers: {
        "User-Agent": "Request-Promise",
    },
    json: true,
};

rp(options)
    .then(function (res) {
        console.log(res.currently.temperature);
        return { temp: res.currently.temperature };
    })
    .catch(function (err) {
        console.log(err);
    });

// Given a position (latitude and longitude), returns the temperature.
