var someProme = new Promise((resolve, reject) => {
  resolve("Its work now");
  //reject("Unable to connect");
});
someProme.then((message) => {
  console.log(message);
}, (errMsg) => {
  console.log(errMsg);
});
