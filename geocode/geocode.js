const request = require('request');
module.exports.geocodeAddress = function(callback){
  request({
    url: 'http://localhost:3000/api',
    json: true
  }, (err, response, body) => {
    if(err){
        callback('Unable to connect google server');
      //console.log('Unable to connect google server');
    }else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to fetch the results');
      //console.log('Unable to fetch the results');
    }else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng

      });
      // console.log(`Adress: ${body.results[0].formatted_address}`);
      // console.log(`Lat: ${body.results[0].geometry.location.lat}`);
      // console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    }

  });
};
//    0327af2fffb5bd00bfbe351a4a035c15
