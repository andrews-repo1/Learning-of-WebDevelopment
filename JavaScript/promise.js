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
    //executor function body
})

// what happens when call resolve(value)