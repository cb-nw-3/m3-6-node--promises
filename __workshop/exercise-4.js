// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
require("dotenv").config();
const opencage = require("opencage-api-client");
const DarkSky = require("dark-sky");
const exercise2 = require("./exercise-2");
const exercise3 = require("./exercise-3");

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  return exercise2
    .getAddressPosition(address)
    .then((result) => {
      return exercise3.getCurrentTemperatureAtPosition(result.lat, result.lng);
    })
    .then((result) => console.log(result));
}

console.log(getCurrentTemperature("H3G 1M8"));
