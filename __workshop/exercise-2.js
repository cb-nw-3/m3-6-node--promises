// Exercise 2 - `getAddressPosition`
// ---------------------------------
require("dotenv").config();
const opencage = require("opencage-api-client");

function getAddressPosition(address) {
  const requestObj = {
    key: "4a0db823fade434cbd416a2863c03ff2",
    q: address,
  };

  return opencage
    .geocode(requestObj)
    .then((data) => data.results)
    .then((results) => {
      let lat = results[0].geometry.lat;
      lat = lat.toString();
      let lng = results[0].geometry.lng;
      lng = lng.toString();
      return { lat, lng };
    })
    .catch((err) => console.log("err: ", err));
}
// getAddressPosition("6205 Deslandes Saint-Hyacinthe QC J2R 1C3");
// getAddressPosition(address);
module.exports = { getAddressPosition };
