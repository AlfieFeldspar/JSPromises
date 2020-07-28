const {checkInventory} = require('./catchAsynch.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

//use 'catch' for the failure instead of chaining another .then
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure);