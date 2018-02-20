"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    // define the constructor function for the Person class
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "getGreeting",
        value: function getGreeting() {
            // return "Hi I am " + this.name + "!";
            // New ES6 strings
            return "Hi! I am " + this.name + " and I am " + this.age + " years old";
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return this.name + " is " + this.age + " year(s) old.";
        }
    }]);

    return Person;
}();

// create a subclass


var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        // accessing the constructor
        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));
        // super refers to the parent class


        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: "hasMajor",
        value: function hasMajor() {
            return !!this.major;
        }

        // override the getDescription method

    }, {
        key: "getDescription",
        value: function getDescription() {
            // super keyword is used to get the parent class instance
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "getDescription", this).call(this);
            if (this.hasMajor()) {
                description += " Their major is " + this.major + ".";
            }
            return description;
        }
    }]);

    return Student;
}(Person);

// creating a new subclass - traveller


var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveler, [{
        key: "hasHomeLocation",
        value: function hasHomeLocation() {
            return !!this.homeLocation;
        }
    }, {
        key: "getGreeting",
        value: function getGreeting() {
            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), "getGreeting", this).call(this);
            if (this.hasHomeLocation()) {
                greeting += " I'm visiting from " + this.homeLocation;
            }
            return greeting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Person("Emre Kayikcilar", 33);
console.log(me.getGreeting());
console.log(me.getDescription());
// you don't have to provide all the constructor arguments - NO!
var other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

console.log("-------");

// instances for student class
var newStudent = new Student("Ebru Çetin", 32, "Computer Science");
console.log(newStudent);
console.log(newStudent.hasMajor());
// console.log(newStudent.getGreeting());
console.log(newStudent.getDescription());

var otherStudent = new Student();
console.log(otherStudent);
console.log(otherStudent.hasMajor());
console.log(otherStudent.getDescription());

console.log("-------");

var newTraveler = new Traveler("Emre Kayıkçılar", 33, "İzmir");
console.log(newTraveler.getGreeting());

var otherTraveler = new Traveler();
console.log(otherTraveler.getGreeting());
