const Animals = {
    eats: true
};
const mammals = Object.create(Animals)
mammals.has_fur = true;
const dogs = Object.create(mammals)
dogs.bark = true;
function traverse(obj){
    let current = obj;
    while(current)
    {
        console.log(current);
        current = Object.getPrototypeOf(current)
    }
};
// my_dog -> dog -> mammals -> Animals -> Object.prototype -> null
traverse(dogs);


class MyClass{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}
