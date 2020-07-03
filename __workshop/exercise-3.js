// Exercise 3 - `getAddressPosition`
// ---------------------------------
const dotenv = require("dotenv").config();
const rp = require("request-promise");

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  rp(
    `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${position.latitude},${position.longitude}?units=si`
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
  latitude: 48.1341651,
  longitude: 11.5464794,
});
