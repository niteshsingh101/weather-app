var getUser = (id, callback) => {
  var user = {
    id: 1,
    name: 'Nitesh Singh'
  };
  callback(user);
};

//call method

getUser(1, (userObject) => {
  console.log(userObject);
});
