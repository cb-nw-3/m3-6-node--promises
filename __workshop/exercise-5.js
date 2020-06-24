// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
const rp = require('request-promise');
require('dotenv').config();
const opencage = require('opencage-api-client');

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
    //fetch the information from the external source http link
    return request('http://api.open-notify.org/iss-now.json')

        .then(response => {
            //parse as JSON becuase the source is .json
            const issLocation = JSON.parse(response);
            return {
                lat: issLocation.iss_position.latitude,
                lng: issLocation.iss_position.longitude,
            }
        })
     
        .catch(error => console.log('Error: ', error));
}     

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

function getDistanceFromIss(address) {
    let result1 = getAddressPosition(address);
    let result2 = getIssPosition();
  
    Promise.all([result1, result2])
    .then(result => {
      return getDistance(result[0], result[1]);
    })
    .then(result => console.log(result))
}

getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');