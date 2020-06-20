// Exercise 2 - `getAddressPosition`
// ---------------------------------
const request = require("request-promise");
const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((response) => {
      const coordinates = response.results[0].geometry;
      //console.log(coordinates);
      return coordinates;
    })
    .catch((error) => console.log(error));
}

getAddressPosition("K1A0A9").then(console.log);
