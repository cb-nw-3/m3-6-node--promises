// Exercise 2 - `getAddressPosition`
// ---------------------------------

require('dotenv').config();

var rp = require('request-promise');
const { get } = require('request-promise');

let openCageKey = process.env.OPENCAGE_API_KEY;

const opencage = require('opencage-api-client');

function getOpenCageResult()
{
    opencage
    .geocode({ q: '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8', key: openCageKey })
    .then(data => { 
      let first_hit = data.results[0].geometry;
      console.log({first_hit});
      // console.log(JSON.stringify(data.results[0].annotations.DMS));
    })
    .catch(error => {
      console.log('error', error.message);
    });
}


getOpenCageResult();

