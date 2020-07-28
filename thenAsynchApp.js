const { checkInventory } = require('./thenAsynch.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

checkInventory(order)
  .then(handleSuccess, handleFailure);

//alternate syntax: chaining .then & adding an output function
/*
checkInventory(order)
  .then((handleSuccess) => {
    console.log(handleSuccess);
  })
  .then(handleFailure);
*/

//run in Bash using
//$ node libraryApp.js