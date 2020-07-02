// Exercise 2 - `getAddressPosition`
// ---------------------------------
require('dotenv').config();

const opencage = require('opencage-api-client');

// console.log(process.env.OPENCAGE_API_KEY);

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
                    // console.log(place.geometry)
                    return place.geometry;
                }
            } else {
                console.log('error',  data.status.message);
            }
        })
        .catch(error => {
            console.log('error', error.message)
        });
}

getAddressPosition('5485 Chemin de la Côte-Saint-Paul, Montréal, QC H4C 1X3').then((res) => console.log(res));
getAddressPosition('1000 Avenue Émile-Journault, Montréal, QC H2M 2E7').then((res) => console.log(res));
getAddressPosition('16400 Boulevard Laflamme, Saint-Hyacinthe, QC J4B 6K5').then((res) => console.log(res));
