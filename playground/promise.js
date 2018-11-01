var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }else{
        reject("Argument must be number");
      }
  });
};
asyncAdd(5, 10).then((result) => {
  console.log(`result:  ${result}`);
  return asyncAdd(result, 30);
}).then((res) => {
  console.log(`Result should be 45 : ${res}`);
}).catch((err) => {
  console.log(err);
});;

// var someProme = new Promise((resolve, reject) => {
//   resolve("Its work now");
//   //reject("Unable to connect");
// });
// someProme.then((message) => {
//   setTimeout(() => {
//     console.log(message);
//   }, 2500);
//
// }, (errMsg) => {
//   console.log(errMsg);
// });
