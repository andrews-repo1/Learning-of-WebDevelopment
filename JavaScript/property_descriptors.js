const obj = {};
Object.defineProperty(obj, "name", {
    value: "Jesson",
    writable: false,
    enumerable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptors(obj, "name"));