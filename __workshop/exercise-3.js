// Exercise 3 - `getAddressPosition`
// ---------------------------------
var rp = require("request-promise");
require("dotenv").config();

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  return rp(
    "https://api.darksky.net/forecast/" +
      process.env.DARK_SKY_API_KEY +
      "/" +
      position.lat +
      "," +
      position.lng
  ).then((response) => {
    return JSON.parse(response).currently.temperature;
  });
}

getCurrentTemperatureAtPosition({ lat: 45.497118, lng: -73.579044 }).then(
  (data) => {
    console.log(data);
  }
);
