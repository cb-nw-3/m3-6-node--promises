// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
const { getAddressPosition } = require("./exercise-2");
const { getCurrentTemperatureAtPosition } = require("./exercise-3");
// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  getAddressPosition(address)
    .then((data) => {
      return getCurrentTemperatureAtPosition(data);
    })
    .catch((error) => {
      console.log("exercise 4 Error", error);
    });
}

getCurrentTemperature("Huston Texas");
