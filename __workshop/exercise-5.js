// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

const opencage = require("opencage-api-client");
require("dotenv").config();
let requestPromise = require("request-promise");

// get pos1 and pos2
// - new function
//     within this function let's call issPosition().then
//         pos1 = {lat: value.geometry.lat, long: value.geometry.long}

//         addressPosition.then
//             pos2 = {lat: value.geometry.lat, long: value.geometry.long}
//             getDistance(pos1, pos2)

// Returns the current position of the ISS
function getIssPosition() {
  // we need to retrieve the information
  let info = {
    method: "GET",
    uri: "http://api.open-notify.org/iss-now.json",
  };

  return (
    requestPromise(info)
      .then((response) => {
        // we need to parse out the data in the json file
        const issLocation = JSON.parse(response);
        return {
          lat: issLocation.iss_position.latitude,
          lng: issLocation.iss_position.longitude,
        };
      })
      // rejected cases error message
      .catch((error) => console.log("Error: ", error))
  );
}

/////////////////////////

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
      return data;
    })
    .catch((error) => console.log("error", error.message));
}
//////////////////////

function getPos1AndPos2(address) {
  getIssPosition().then((value) => {
    let pos1 = { lat: value.lat, lng: value.lng };
    getAddressPosition(address).then((value) => {
      let pos2 = { lat: value.geometry.lat, lng: value.geometry.lng };
      console.log(getDistance(pos1, pos2));
    });
  });
}

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

getPos1AndPos2("7777 Decarie, Montreal");
