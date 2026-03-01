class Person{
    constructor(name){
        this.name = name;
    }
    static mammal = true;
    greet(){
        console.log("Hi, " + this.name);
    }
}
const my_friend = new Person("Peter");

console.log(Person);
console.log(Person.prototype); //{}  methods in class are non-enumerable by default
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(typeof Person);
const my_friend1 = new Person("Jelly");
console.log(my_friend.greet === my_friend1.greet);

