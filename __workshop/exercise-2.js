// Exercise 2 - `getAddressPosition`
// ---------------------------------

// external package add

const dotenv = require('dotenv').config();
const NodeGeocoder = require('node-geocoder');

// init geocoder

// this comes from the opencage tutorial
// I believe that we're instantiating a new NodeGeocoder instance
// geocoder is that instance

let geocoder = NodeGeocoder({
    provider: 'opencage',
    apiKey: process.env.OPENCAGE_API_KEY
});

function getAddressPosition(address) {

    // this block was provided, but I don't really need it anymore
    // mi dispiace, molto dispiace

    // const requestObj = {
    //     key: process.env.OPENCAGE_API_KEY,
    //     q: address
    // };

    geocoder.geocode(address)
        .then(response => {
            return {
                lat: response[0].latitude,
                lng: response[0].longitude
            }
        })
        .then(data => console.log(data))
        .catch(error => console.log(error.message));
}

getAddressPosition("London");