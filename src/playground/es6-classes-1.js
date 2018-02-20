class Person{
    // define the constructor function for the Person class
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        // return "Hi I am " + this.name + "!";
        // New ES6 strings
        return `Hi! I am ${this.name} and I am ${this.age} years old`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

const me = new Person("Emre Kayikcilar", 33);
console.log(me.getGreeting());
console.log(me.getDescription());
// you don't have to provide all the constructor arguments - NO!
const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());