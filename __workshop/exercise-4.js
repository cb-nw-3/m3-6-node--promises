// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
const dotenv = require("dotenv").config();
const opencage = require("opencage-api-client");
const DarkSky = require("dark-sky");
const darksky = new DarkSky(process.env.DARKSKY_API_KEY);
// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function

// address ==> position
function getCurrentTemperatureAtPosition(lat, lng) {
  return darksky
    .latitude(lat)
    .longitude(lng)
    .get()
    .then((result) => {
      return result.currently.temperature;
    })
    .catch((error) => console.log("error:", error));
}

//position ==> temperature
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

//address ==> temperature
function getCurrentTemperature(address) {
  getAddressPosition(address).then((addressInfo) => {
    getCurrentTemperatureAtPosition(
      addressInfo.geometry.lat,
      addressInfo.geometry.lng
    ).then((temperatureInfo) => {
      console.log(temperatureInfo);
    });
  });
}
getCurrentTemperature("7777 Decarie Montreal");
