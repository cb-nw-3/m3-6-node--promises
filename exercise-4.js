// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
const rp = require("request-promise");
const env = require("dotenv");
env.config();
const opencage = require("opencage-api-client");
const myKey = process.env.DARKSKY_API_KEY;
const { getAddressPosition } = require("./exercise-2");
const { getCurrentTemperatureAtPosition } = require("./exercise-3");

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
    return getAddressPosition(address).then(function (pos) {
        return getCurrentTemperatureAtPosition(pos).then(function (temp) {
            return temp;
        });
    });
}
getCurrentTemperature("1500 Pennsylvania Ave. Washington, DC").then(function (
    temp
) {
    console.log(temp);
});
