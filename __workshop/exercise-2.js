// Exercise 2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressPosition(address) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };

    return opencage.geocode(requestObj)
        .then( data => {
            if(data.status.code == 200){
                if (data.results.length > 0) {
                    const place = data.results[0];
                    return place;
                }
            } else if (data.status.code == 402){
                console.log('hit free-trial daily limit');
            } else {
                console.log('error', data.status.message);
            }})
        .then(data => {
            return data.geometry;
        })
        .catch(error => {
            console.log('error', error.message);
        });
    }

// getAddressPosition('1150 Van Horne, Montréal, QC H2V 1K2');
module.exports = {getAddressPosition};
