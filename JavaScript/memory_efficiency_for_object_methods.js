// constructor-based methods
function MyObj(name){
    this.name = name;
    this.sayHi = function(){
        console.log("Hi, " + this.name);
    }
}
console.log(MyObj.prototype);
// creates a function object inside each new instance
const obj1 = new MyObj("Tom");
const obj2 = new MyObj("Cliff");
console.log(obj1.sayHi);
console.log(obj1.sayHi === obj2.sayHi);

/*
//obj = Object.create(my_prototype) does not call for constructor function
//It only sets the prototype of obj to my_prototype
MyObj.prototype.callMe = function(){
    console.log("call me");
}
const obj3 = Object.create(MyObj.prototype);
console.log(obj3.sayHi);
console.log(obj3.callMe);
*/

// prototype-based
// named this function MyObj and it would change the MyObj constructor called before because of hoisting
function MyObj1(name){
    this.name = name;
}
// every object whose prototype is MyObj1 shares the same sayHi function object
// more memory efficient than constructor-based methods
MyObj1.prototype.sayHi = function(){
    console.log("Hi, " + this.name);
}
console.log(MyObj1.prototype);
const obj4 = new MyObj1("Frank");
const obj5 = new MyObj1("Sam");
console.log(obj4.sayHi);
console.log(obj4.sayHi === obj5.sayHi);





    