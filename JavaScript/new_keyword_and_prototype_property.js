// only constructor function has the prototype property while any objects could serve as a prototype
function MyObj(name){
    this.name = name;
}
MyObj.prototype.sayHi = function()
{
    console.log("Hi");
}

/*
const obj = {}
obj.[[prototype]] = MyObj.prototype
MyObj.call(obj, param)
return obj
*/
let param = "Olive";
const obj = new MyObj(param);

console.log(obj);
console.log(Object.getPrototypeOf(obj));