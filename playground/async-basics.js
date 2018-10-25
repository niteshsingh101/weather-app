console.log("Start block ");
setTimeout(() => {
  console.log("Inside block");
}, 2000);
setTimeout(() => {
  console.log("2nd Inside block");
}, 0);
console.log("End block");
