// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

const request = require("request-promise");
const opencage = require("opencage-api-client");
require("dotenv").config();

const { getAddressPosition } = require("./exercise-2");
const { getCurrentTemperatureAtPosition } = require("./exercise-3");

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  return getAddressPosition(address).then((position) =>
    getCurrentTemperatureAtPosition(position)
  );
}

getCurrentTemperature("h2t2a1").then((data) => console.log("ex4: ", data));
