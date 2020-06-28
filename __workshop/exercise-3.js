// Exercise 3 - `getAddressPosition`
// ---------------------------------
const request = require("request-promise");
const opencage = require("opencage-api-client");
require("dotenv").config();
// Given a position (latitude and longitude), returns the position
let DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
console.log(DARKSKY_API_KEY);
function getCurrentTemperatureAtPosition(position) {
  return request(
    // as opposed to ex 2 we do not need to create object (with address and key) to call library
    `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${position.lat},${position.lng}`
  )
    .then((result) => JSON.parse(result))
    .then((result) => result.currently.temperature)
    .catch((error) => {
      console.log("error", error.message);
    });
}
getCurrentTemperatureAtPosition({ lat: 45.47692, lng: -73.64822 }).then(
  (res) => {
    console.log("From EX3: " + res);
  }
);
module.exports = { getCurrentTemperatureAtPosition };
