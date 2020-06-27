// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

var rp = require('request-promise');
require('dotenv').config();

let darkSkyKey = process.env.DARKSKY_API_KEY;
let openCageKey = process.env.OPENCAGE_API_KEY;

const request = require('request');
const opencage = require('opencage-api-client');


const getCurrentTemp = async () => {
    const result = await rp(options);
    const data = JSON.parse(result);
    console.log(data.currently.temperature);
}

const getOpenCage = async (address) => {
    const openCageResult = await opencage.geocode({ q: address, key: openCageKey });
    let first_hit = openCageResult.results[0].geometry;
    let return_string = first_hit.lat + "," + first_hit.lng;
    return return_string;

}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    return fToCel;
}

const tempFromAddress = async (address) => {

    try {
        const latsLongFromOpenCage = await getOpenCage(address);
        let request_string = 'https://api.darksky.net/forecast/' + darkSkyKey + '/' + latsLongFromOpenCage;
        let options = {
            uri: request_string
        };
        //console.log(request_string);
        const result = await rp(options);
        const data = JSON.parse(result);
        //console.log({data});
        //console.log(data.currently.temperature+" Fahrenheit"); 
        let cel = fToC(data.currently.temperature);
        return cel;
    }
    catch (err) { console.log(err) }



}

const getCurrentTemperature = async (address) => {
    try {
        let tempFromAddy = await tempFromAddress(address);
        console.log(tempFromAddy + " Celsius");
    }
    catch (err) { console.log(err) }
}

getCurrentTemperature('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');