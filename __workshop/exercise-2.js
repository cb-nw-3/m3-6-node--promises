// Exercise 2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };

  return opencage.geocode(requestObj).then((response) => {
    return response.results[0].geometry;
  });
}

getAddressPosition(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((data) => {
  console.log(data);
});
