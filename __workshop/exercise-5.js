// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

const request = require("request-promise");
const { getIssPosition } = require("./exercise-1");
const { getAddressPosition } = require("./exercise-2");
const opencage = require("opencage-api-client");
require("dotenv").config();

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
  //   const issPromise = getIssPosition();
  //   const addPromise = getAddressPosition(address);

  return Promise.all([getIssPosition(), getAddressPosition(address)]).then(
    (values) => {
      //console.log(values);
      return getDistance(values[0], values[1]);
    }
  );
}

getDistanceFromIss("K1A0A9").then(console.log);
