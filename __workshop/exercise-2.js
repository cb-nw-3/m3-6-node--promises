// Exercise 2 - `getAddressPosition`
// ---------------------------------

require('dotenv').config();
const opencage = require('opencage-api-client');



// var api_url = 'https://api.opencagedata.com/geocode/v1/json'
// const apiKey = '0ee04c1eff594941915abb7fac306a71';


function getAddressPosition(address) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };

    return opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0];
                    console.log(data.results[0].geometry)
                    return place;
                }
            } else {
                console.log('error', data.status.message);
            }
        })
        .then(data => {
            // console.log(data);
            return data;
        })
        .catch(error => console.log('error', error.message));
}

getAddressPosition('1288 Ave Des Canadiens, Montreal QC H3B 3B3');