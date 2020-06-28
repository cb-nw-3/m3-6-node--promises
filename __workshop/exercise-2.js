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
    .then((data) => {
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          let place = data.results[0];
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
    .catch((error) => {
      console.log("error", error.message);
    });
}

getAddressPosition("London, England");
