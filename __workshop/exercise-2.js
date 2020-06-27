// Exercise 2 - `getAddressPosition`
// ---------------------------------
const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  // geocode (to get the coordinates)
  return opencage
    .geocode(requestObj)
    .then((data) => {
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          const place = data.results[0];
          return place;
        }
      } else {
        console.log("error", data.status.message);
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log("error", error.message));
}

getAddressPosition("7777 Decarie, Montreal, Quebec");

module.exports = { getAddressPosition };
