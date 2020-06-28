// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
//1 and 2
// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
const { getIssPosition } = require("./exercise-1");
const { getAddressPosition } = require("./exercise-2");

function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

function getDistanceFromIss(address) {
  return getIssPosition().then((result) => {
    // We format the result ({lat, long}) so it works with the getDistance function
    const formattedResult = { lat: result.latitude, lng: result.longitude };
    //once I have the result or address call the following function on it
    return getAddressPosition(address).then((result2) => {
      return getDistance(formattedResult, result2);
    });
  });
}

getDistanceFromIss("50 Glenmore, Montreal, H3X 3M9").then((res) => {
  // the.then requires an (arrow )function that receives the result
  console.log("From EX5:", res);
});
