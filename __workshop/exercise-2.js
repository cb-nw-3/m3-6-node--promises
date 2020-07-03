// Exercise 2 - `getAddressPosition`
// ---------------------------------
const dotenv = require("dotenv").config();
const opencage = require("opencage-api-client");
const rp = require("request-promise");

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((address) => {
      if (address.status.code === 200) {
        console.log(address.results[0].geometry);
      } else {
        console.log("Error: ", address.status.message);
      }
    })
    .catch((error) => console.log("Error: ", error));
}

getAddressPosition("Theresienhöhe 11, München");

module.exports = { getAddressPosition };
