// Exercise 2 - `getAddressPosition`
// ---------------------------------
const opencage = require("opencage-api-client");
require("dotenv").config();

let myKey = process.env.OPENCAGE_API_KEY;
console.log(myKey);

function getAddressPosition(address) {
  const requestObj = {
    key: myKey,
    q: address,
  };
}

getAddressPosition("1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8");
