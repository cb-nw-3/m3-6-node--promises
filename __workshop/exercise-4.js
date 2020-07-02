// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
const { getAddressPosition } = require('./exercise-2');
const { getCurrentTemperatureAtPosition } = require('./exercise-3');

function getCurrentTemperature(address) {
  getAddressPosition(address);
  getCurrentTemperatureAtPosition(address);
}

getCurrentTemperature('45.555,22.11');
