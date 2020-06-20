// Exercise 2 - `getAddressPosition`
// ---------------------------------
const dotenv = require('dotenv');
dotenv.config();


//yarn add opencage-api-client to package.json
const opencage = require('opencage-api-client');

function getAddressPosition(address) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };
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

getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
.then(result=> console.log(result))
.catch(error=> console.log(error));


