// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

const { getIssPosition } = require("./exercise-1");
const { getAddressPosition } = require("./exercise-2");

// function getDistance(getAddressPosition(address), getIssPosition()) {
//   return Math.sqrt(
//     Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
//   );
// }

function getDistanceFromIss(address) {
  return Promise.all([getAddressPosition(address), getIssPosition()]).then(
    (data) => {
      return getDistance(data[0], data[1]);
    }
  );
}

getDistanceFromIss("87 rue Dupéré, Cantley, QC J8V 2V4").then((data) =>
  console.log(data)
);
