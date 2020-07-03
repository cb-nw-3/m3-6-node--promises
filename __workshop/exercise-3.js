// Exercise 3 - `getAddressPosition`
// ---------------------------------
const dotenv = require("dotenv").config();
const rp = require("request-promise");

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  rp(
    `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${position.lat},${position.lng}?units=si`
  )
    .then((result) => {
      return JSON.parse(result);
    })
    .then((data) => {
      console.log("Temperature: ", data.currently.temperature);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

getCurrentTemperatureAtPosition({
  lat: 48.1341651,
  lng: 11.5464794,
});

module.exports = { getCurrentTemperatureAtPosition };
