var request = require('request');

module.exports.getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/0327af2fffb5bd00bfbe351a4a035c15/${lat},${lng}`,
    json: true
  }, (err, response, body) => {
      if (!err && response.statusCode === 200) {
          callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          });
      }
      else {
        callback('unable to process the request');
      }

  });
};
