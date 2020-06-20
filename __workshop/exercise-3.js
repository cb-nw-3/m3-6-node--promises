// Exercise 3 - `getAddressPosition`
// ---------------------------------
const rp = require("request-promise");
const dotenv = require("dotenv");
dotenv.config();

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  const requestObj = {
    key: process.env.DARKSKY_API_KEY,
    latitude: position.lat,
    longitude: position.lng,
  };
  return rp(
    `https://api.darksky.net/forecast/${requestObj.key}/${requestObj.latitude},${requestObj.longitude}`
  )
    .then((resultString) => {
      return JSON.parse(resultString);
    })
    .then((data) => {
      console.log(data.currently.temperature);
      return data.currently.temperature;
    })
    .catch((error) => {
      console.log("error", error);
    });
}

// getCurrentTemperatureAtPosition({ lat: 45.53307, lng: -75.737659 });
// getCurrentTemperatureAtPosition({ lat: 1000, lng: 1000 });

module.exports = { getCurrentTemperatureAtPosition };
