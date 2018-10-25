const request = require('request');

request({
  url: 'http://localhost:3000/api',
  json: true
}, (err, response, body) => {
  console.log(`Adress: ${body.results[0].formatted_address}`);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});
