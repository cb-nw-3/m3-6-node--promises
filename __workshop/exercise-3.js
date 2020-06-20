// Exercise 3 - `getAddressPosition`
// ---------------------------------

// Given a position (latitude and longitude), returns the position

//only works where .env file is located in workshop folder
const rp = require("request-promise");
require("dotenv").config();

//DARSKY API REQUEST
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

function getCurrentTemperatureAtPosition(position) {
  const requestObj = {
    key: process.env.DARKSKY_API_KEY,
    latitude: position.lat,
    longitude: position.lng,
  };

  let requestAPI = `https://api.darksky.net/forecast/${requestObj.key}/${requestObj.latitude},${requestObj.longitude}`;
  //console.log(requestAPI);
  return rp(requestAPI)
    .then(JSON.parse)
    .then((result) => {
      console.log(result.currently.temperature);
      return result.currently.temperature;
    })
    .catch((error) => {
      console.log(error.statusCode);
    });
}

//EXERCISE 2 OUTPUTS THIS
//which we will use to request the temperature
let testPos = { lat: 45.497118, lng: -73.579044 };

getCurrentTemperatureAtPosition(testPos);

module.exports = {
  getCurrentTemperatureAtPosition,
};
