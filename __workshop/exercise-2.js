// Exercise 2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
//belwo allows us to access the .env file
require("dotenv").config();
//javascript library to help us call opencage
let myKey = process.env.OPENCAGE_API_KEY;
console.log(myKey);
function getAddressPosition(address) {
  const requestObj = {
    key: myKey,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      // console.log(JSON.stringify(data));
      if (data.status.code == 200 && data.results.length > 0) {
        return data.results[0].geometry;
      }
    })
    .catch((error) => {
      console.log("error", error.message);
    });
}
getAddressPosition("50 Glenmore, Montréal, QC H3X 3M9").then((res) => {
  console.log("From EX2: ", res);
});
module.exports = { getAddressPosition };
