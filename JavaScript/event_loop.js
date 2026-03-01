/*
1. Run all synchronous code (call stack)
2. Run ALL microtasks
3. Run ONE macrotask
4. Repeat
*/

console.log("Start");
// push the callback into the macrostack
setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);
// push the callback into the microstack
Promise.resolve().then(() => {
    console.log("Promise Resolved");
});
console.log("End");