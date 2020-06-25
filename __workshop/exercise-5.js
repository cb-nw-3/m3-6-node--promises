// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
const request = require("request-promise");
const opencage = require("opencage-api-client");
require("dotenv").config();

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => {
      const issLoc = JSON.parse(response);
      return {
        lat: issLoc.iss_position.latitude,
        lng: issLoc.iss_position.longitude,
      };
    })
    .then((issPosition) => {
      const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address,
      };

      return opencage.geocode(requestObj).then((response) => {
        return {
          addressPosition: response.results[0].geometry,
          issPosition: issPosition,
        };
      });
    })
    .then((positions) => {
      return getDistance(positions.addressPosition, positions.issPosition);
    });
}

function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

getDistanceFromIss(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((distance) => {
  console.log(distance);
});
