// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
require('dotenv').config();

var rp = require('request-promise');
let openCageKey = process.env.OPENCAGE_API_KEY;
const opencage = require('opencage-api-client');

// hello
var ISSoptions = {
    uri: 'http://api.open-notify.org/iss-now.json',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

const getIssPosition = async () => {
    const result = await rp(ISSoptions);
    let pos = {lat: Number(result.iss_position.longitude), lng: Number(result.iss_position.latitude)};
    return pos;
    
}

const getOpenCagePosition = async (address) => {
    const openCageResult = await opencage.geocode({ q: address, key: openCageKey });
    let first_hit = openCageResult.results[0].geometry;
    let pos = {lat: first_hit.lat, lng: first_hit.lng};
    return pos
    // let return_string = first_hit.lat + "," + first_hit.lng;
    // return return_string;
}

function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}




const getDistanceFromIss = async () => {

    try {
        const iSSPosition = await getIssPosition();
        const positiionFromAddress = await getOpenCagePosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');


        let distance = getDistance(iSSPosition, positiionFromAddress);
        console.log (distance);


    } catch (err)
    {
        console.log(err);
    }

}

getDistanceFromIss();