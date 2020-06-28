// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

//You already created a function that can do address ==> position, a
//nd one that can do position ==> temperature.
//For this exercise, re-use these two functions to create one that goes directly from address ==> temperature.
const { getCurrentTemperatureAtPosition } = require("./exercise-3");
const { getAddressPosition } = require("./exercise-2");

function getCurrentTemperature(address) {
  return getAddressPosition(address).then((result) => {
    return getCurrentTemperatureAtPosition(result);
  });
}

getCurrentTemperature("50 Glenmore, Montréal, QC H3X 3M9").then((res) => {
  console.log("From EX4: " + res);
});
