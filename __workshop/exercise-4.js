// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
const dotenv = require('dotenv');
dotenv.config();
const request = require('request-promise');

//yarn add opencage-api-client to package.json
const opencage = require('opencage-api-client');

function getAddressPosition(address) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };
    console.log(requestObj.key);
    //forward geocode (address to coordinates)
    return opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0].geometry;
                    console.log(data.results[0].geometry);
                    return place;
                }
            } else {
                //other possible response codes:
                //https://opencagedata.com/api#codes
                console.log('error', data.status.message);
            }
        })
        
      
        .catch(error => console.log('error', error.message));
       
}

function getCurrentTemperatureAtPosition(position) {
    let key = process.env.DARKSKY_API_KEY;

    return request(`https://api.darksky.net/forecast/${key}/${position.latitude},${position.longitude}`)
    .then(data => {
        const dataObj = JSON.parse(data);
        
        //console.log(dataObj.currently.temperature);
        return temperature = dataObj.currently.temperature;
            
    })
    .catch(error => console.log('error', error.message)

}

//given position
const position = {
    latitude: 70,
    longitude: 80
}

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
    return getAddressPosition(address)
    .then(result => {
        // console.log('this is the result:' , result)
        return getCurrentTemperatureAtPosition(position);
    })
    .then(result => console.log(result));
}

console.log(getCurrentTemperature('4095 Côte-des-Neiges RdMontreal, QC H3H 1W9')); 
