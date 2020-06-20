// Exercise 2 - `getAddressPosition`
// ---------------------------------

//api documentation found at https://opencagedata.com/api

//const OPENCAGE = require("opencage-api-client");
const rp = require("request-promise");
const request = require("request");
//Dotenv is a zero-dependency module that loads environment variables from
//a .env file into process.env.

//this is where we have stored our API key that is given upon registering
require("dotenv").config();

const getAddressPosition = (address) => {
  //API requires a JSON request format consisting of our API key
  //and an address to query.
  const requestObj = {
    //this is from the root .env file

    //config will read your .env file, parse the contents, assign it
    //to process.env, and return an Object with a parsed key containing
    //the loaded content or an error key if it failed.

    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  //console.log(requestObj);
  return rp(
    `https://api.opencagedata.com/geocode/v1/json?q=${requestObj.q}&key=${requestObj.key}`
  )
    .then(function (data) {
      //console.log(data);

      //format json response into object
      let response = JSON.parse(data);

      //access the geometry data to retrieve the lat/long data.
      let place = response.results[0].geometry;
      console.log(place);
      return place;
    })
    .catch(function (error) {
      //console.log(error);
      console.log("error:", error.code, error.message);
    });
};

//NOTE: this is forward GEOCODING, that is we are looking to find the
//coordinates, based on a search string of an actual place.
//reverse geocoding is providing a position, to return a place.
getAddressPosition("1455 Boulevard de Maisonneuve O, Montreal, QC H3G 1M8");

module.exports = {
  getAddressPosition,
};
