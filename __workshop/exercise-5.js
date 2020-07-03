// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

const { getIssPosition } = require("./exercise-1");
const { getAddressPosition } = require("./exercise-2");

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
  return Promise.all([getIssPosition(), getAddressPosition(address)])
    .then((data) => getDistance(data[0], data[1]))
    .then((distance) => console.log("Distance: ", distance))
    .catch((error) => console.log("Error: ", error));
}

getDistanceFromIss("Theresienhöhe 11, München");
