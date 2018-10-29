const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
// const argv = yargs.option({
//   a: {
//     demand: true,
//     alias: 'address',
//     describe: 'Fetch address from console',
//     string: true
//   }
// }).help()
// .alias('help', 'h')
// .argv;
//console.log(argv);



geocode.geocodeAddress((err, result) => {
  if (err) {
    console.log(err);
  }
  else{
    weather.getWeather(result.lat, result.lng, (err, weatherResult) => {
      if(err){
        console.log("Unable to fetch weather !");
      }
      console.log(`Todday's temperature is: ${weatherResult.temperature} it's feel like ${weatherResult.apparentTemperature}`);
    });
  }
});
