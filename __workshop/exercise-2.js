// Exercise 2 - `getAddressPosition`
// ---------------------------------

require("dotenv").config();
const opencage = require("opencage-api-client");
let MY_API_KEY = process.env.OPENCAGE_API_KEY;

function getAddressPosition(address) {
  const requestObj = {
    key: MY_API_KEY,
    q: address,
  };

  return opencage
    .geocode(requestObj)
    .then((response) => {
      let data = JSON.parse(response);
      if (data.results.length > 0) {
        return data.results[0].geometry;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// getAddressPosition("london, england").then((res) => console.log(res));
module.exports = { getAddressPosition };
