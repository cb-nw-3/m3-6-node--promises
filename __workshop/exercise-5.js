// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

const rp = require('request-promise');
const opencage = require('opencage-api-client');


function getDistanceFromIss(address) {

    return rp('http://api.open-notify.org/iss-now.json')
    .then(res => {
        const issLocation = JSON.parse(res);
        // console.log(res);
        return {
            lat: issLocation.iss_position.latitude,
            lng: issLocation.iss_position.longitude,
        }
    })
    .then(data => {
        // console.log(data);
        return data;
    })
    .catch(err => console.log('Error: ', err))

    .then(position => {
        const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    }

    return opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0];
                    // console.log(place.geometry)
                    return place.geometry;
                }
            } else {
                console.log('error',  data.status.message);
            }
        })
        .then(location => {
            return calculateDistance(position, location)
        })
        .catch(error => {
            console.log('error', error.message)
        })
    })
}

function calculateDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

getDistanceFromIss('100 Peel St Suite 300, Montreal, Quebec H3C 0L8').then((res) => console.log(res));
