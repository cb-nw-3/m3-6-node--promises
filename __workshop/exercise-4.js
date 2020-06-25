// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

const dotenv = require("dotenv");
dotenv.config();

const opencage = require("opencage-api-client");

const DarkSky = require("dark-sky");
const darksky = new DarkSky(process.env.DARKSKY_API_KEY);

// Given an address, returns coordinates
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

// Given a position (latitude and longitude), returns the temperature
function getCurrentTemperatureAtPosition(position) {
  return darksky
    .latitude(position.lat)
    .longitude(position.lng)
    .get()
    .then((data) => {
      return data.currently.temperature;
    })
    .catch((error) => console.log("Error:", error));
}

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  return getAddressPosition(address)
    .then((result) => {
      return result;
    })
    .then((result) => {
      return getCurrentTemperatureAtPosition(result);
    })
    .catch((error) => console.log("Error:", error));
}

getCurrentTemperature("108 Rue Saint-Lazare, Paris, France").then((result) =>
  console.log(result)
);
