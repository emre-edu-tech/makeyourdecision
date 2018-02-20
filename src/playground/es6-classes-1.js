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
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// create a subclass
class Student extends Person {
    constructor(name, age, major){
        // super refers to the parent class
        super(name, age);    // accessing the constructor
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    // override the getDescription method
    getDescription(){
        // super keyword is used to get the parent class instance
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

// creating a new subclass - traveller
class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Person("Emre Kayikcilar", 33);
console.log(me.getGreeting());
console.log(me.getDescription());
// you don't have to provide all the constructor arguments - NO!
const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

console.log("-------");

// instances for student class
const newStudent = new Student("Ebru Çetin", 32, "Computer Science");
console.log(newStudent);
console.log(newStudent.hasMajor());
// console.log(newStudent.getGreeting());
console.log(newStudent.getDescription());

const otherStudent = new Student();
console.log(otherStudent);
console.log(otherStudent.hasMajor());
console.log(otherStudent.getDescription())

console.log("-------");

const newTraveler = new Traveler("Emre Kayıkçılar", 33, "İzmir");
console.log(newTraveler.getGreeting());

const otherTraveler = new Traveler();
console.log(otherTraveler.getGreeting());