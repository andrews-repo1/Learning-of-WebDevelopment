/*
function Promise(executor) {
    // the type of resolve's and reject's arguments is unlimitted
    function resolve(value) { ... }
    function reject(reason) { ... }

    executor(resolve, reject);
}
*/

// hidden internal slots of Promise in JavaScript
/*
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
[[PromiseFulfillReactions]]: []
[[PromiseRejectReactions]]: []
*/

// the resolve and reject functions are provided by the JavaScript engine
// resolve and reject are not keywords
const my_promise = new Promise((resolve, reject) => {
    const success = true;
    if(success){
        resolve("Operation completed successfully.");
    }
    else{
        reject("Operation failed.");
    }
})
my_promise
    .then(result => console.log(result))
    .catch(result => console.log(result));

my_promise.then(result => console.log(result + " Again!"));

/* const my_promise = new Promise(executor_function) */
// initial state of the promise: pending
// executor function runs immediately, resolve() is called
// state changes to fulfilled, "Operation completed successfully." is stored in the [[PromiseResult]]

/* my_promise.then(callback1).catch(callback2) */
// callbacks in .then() and .catch() are added to [[PromiseFulfillReactions]] and [[PromiseRejectReacions]] seperately
// since the state is fulfilled, the callback stored in the [[PromiseFulfillReactions]] is pushed into the microstack