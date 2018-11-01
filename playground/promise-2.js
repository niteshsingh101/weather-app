const request = require('request');
var geocodeAddress = () => {
  return new Promise((resolve, reject) => {
    request({
      url: 'http://localhost:3000/api',
      json: true
    }, (err, response, body) => {
      if(err){
        reject('Unreachable API');
      }else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find the address');
      }else if (body.status === 'OK') {
        resolve(body.results[0].geometry.location);
      }
    });
  });
};
geocodeAddress().then((body) => {
  console.log(JSON.stringify(body, undefined, 2));
}).catch((err) => {
  console.log(err);
});
