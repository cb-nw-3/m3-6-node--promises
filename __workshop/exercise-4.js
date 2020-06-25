// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
const opencage = require("opencage-api-client");
var rp = require("request-promise");
require("dotenv").config();

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };

  return opencage
    .geocode(requestObj)
    .then((response) => {
      return response.results[0].geometry;
    })
    .then((position) => {
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
    });
}

getCurrentTemperature(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((data) => {
  console.log(data);
});
