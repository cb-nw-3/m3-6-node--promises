// Exercise 2 - `getAddressPosition`
// ---------------------------------
const opencage = require("opencage-api-client");
const dotenv = require("dotenv");
dotenv.config();

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      if (data.status.code == 200) {
        console.log("THE LAT and LNG ARE", data.results[0].geometry);
        return data.results[0].geometry;
      } else {
        console.log("error", data.status.message);
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// getAddressPosition("87 rue Dupéré, Cantley, QC J8V 2V4");

module.exports = { getAddressPosition };
