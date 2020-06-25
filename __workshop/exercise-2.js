// Exercise 2 - `getAddressPosition`
// ---------------------------------

// require the 'dotenv' and 'opencage-api-client' modules.
const dotenv = require("dotenv");
dotenv.config();
const openCageAPI = require("opencage-api-client");

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };

  return openCageAPI
    .geocode(requestObj)
    .then((resultObject) => {
      return {
        lat: resultObject.results[0].geometry.lat,
        lng: resultObject.results[0].geometry.lng,
      };
    })
    .catch((error) => {
      console.log("error", error.message);
    });
}

getAddressPosition("H3G 1M8").then((result) => console.log(result));

module.exports = {
  getAddressPosition,
};
