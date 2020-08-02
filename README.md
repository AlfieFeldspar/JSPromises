# JSPromises
A reference repo containing paired javascript files to illustrate syntax
for native (ES6) promises (=asynchronous processes), including new Promise, .then, .catch, 
async...await (ES8), and executor functions.
One file contains modules that are exported to the paired ...app.js file, which requires
them in.

'catchAsync' - checks inventory for shop items (sunglasses, pants, bags); error handling using catch if supply is not adequate.

'promiseAllConcurr' - checks inventory using promise.all so inventory for each (sunglasses, pants, bags) is checked concurrently. When they all resolve, response is delivered.
