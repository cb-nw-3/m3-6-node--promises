// Exercise 2 - `getAddressPosition`
// ---------------------------------
require('dotenv'.config())
//yarn add opencage-api-client to package.json
const opencage = require('opencage-api-client');

function getAddressPosition(address) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };
    return opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0];//[0] is the bounds
                    return place;
                }
            } else {
                // other possible response codes:
                // https://opencagedata.com/api#codes
                console.log('error', data.status.message);
            }
        })
        .then(data => {
            console.log(data);  
            return data;      
        })
        .catch(error => console.log('error', error.message));
}
getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');
getAddressPosition('Friedrich-Ebert-Stra\u00dfe 7, 48153 M\u00fcnster, Germany');