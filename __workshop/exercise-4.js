// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
const dotenv = require("dotenv").config();
const rp = require("request-promise");

const { getAddressPosition } = require("./exercise-2.js");
const { getCurrentTemperatureAtPosition } = require("./exercise-3.js");

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  return getAddressPosition(address)
    .then((temperature) => {
      getCurrentTemperatureAtPosition(temperature);
    })
    .catch((error) => console.log("Error: ", error));
}

getCurrentTemperature("Ouagadougou");
