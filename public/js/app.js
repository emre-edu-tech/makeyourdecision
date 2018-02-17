"use strict";

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

var addArrow = function addArrow(a, b) {
    // console.log(arguments); (no longer available use ES5 functions instead)
    return a + b;
};

console.log(add(55, 1, 101));

var user = {
    name: "Emre",
    cities: ["İzmir", "İstanbul", "Beijing"],
    printPlacesLived: function printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);
        // workaround
        var that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + " has lived in " + city);
        });
    }
};

user.printPlacesLived();

// will work without a workaround
var user2 = {
    name: "Kamil",
    cities: ["İzmir", "İstanbul", "Beijing"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(_this.name + " has lived in " + city);
        });
    }
};

user2.printPlacesLived();

// ES6 function definition
var user3 = {
    name: "Mahmut",
    cities: ["İzmir", "İstanbul", "Beijing"],
    printPlacesLived: function printPlacesLived() {
        var _this2 = this;

        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(_this2.name + " has lived in " + city);
        });
    }
};

user3.printPlacesLived();

// using map method instead of forEach
var user4 = {
    name: "Memduh",
    cities: ["İzmir", "İstanbul", "Beijing"],
    printPlacesLived: function printPlacesLived() {
        var _this3 = this;

        console.log(this.name);
        console.log(this.cities);

        var cityMessages = this.cities.map(function (city) {
            return _this3.name + " has lived in " + city;
        });

        return cityMessages;
    }
};

console.log(user4.printPlacesLived());

// challenge area
var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 10,
    multiply: function multiply() {
        var _this4 = this;

        return this.numbers.map(function (number) {
            return _this4.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
