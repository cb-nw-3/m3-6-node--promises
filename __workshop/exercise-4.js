// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

const { getAddressPosition } = require("./exercise-2");
const { getCurrentTemperatureAtPosition } = require("./exercise-3");

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  return getAddressPosition(address)
    .then((response) => {
      return getCurrentTemperatureAtPosition(response);
    })
    .catch((err) => console.log(err));
}

// getCurrentTemperature("london, england").then((res) => console.log(res));
