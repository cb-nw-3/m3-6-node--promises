// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

const dotenv = require("dotenv");
dotenv.config();

const opencage = require("opencage-api-client");

const rp = require("request-promise");

function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

function getIssPosition() {
  const options = {
    method: "GET",
    uri: "http://api.open-notify.org/iss-now.json",
  };

  return rp(options)
    .then((response) => {
      const issLocation = JSON.parse(response);
      return {
        lat: issLocation.iss_position.latitude,
        lng: issLocation.iss_position.longitude,
      };
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
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

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
  const issPos = getIssPosition();
  const addressPos = getAddressPosition(address);

  return Promise.all([issPos, addressPos]).then(([result1, result2]) => {
    return getDistance(result1, result2);
  });
}

getDistanceFromIss("55 Church St, New York, United States").then((result) =>
  console.log(result)
);
