// Exercise 2 - `getAddressPosition`
// ---------------------------------
const dotenv = require("dotenv");
dotenv.config();

const opencage = require("opencage-api-client");

function getAddressPosition(address) {
  const requestObj = {
    key: "<API_KEY>",
    q: address,
  };

  return opencage
    .geocode(requestObj)
    .then((data) => {
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          const place = data.results[0];
          return {
            lat: place.geometry.lat,
            lng: place.geometry.lng,
          };
        }
      } else {
        console.log("error", data.status.message);
      }
    })
    .catch((error) => console.log("Error:", error));
}

getAddressPosition("HaYarkon St 205, Tel Aviv-Yafo, Israel").then((result) =>
  console.log(result)
);
