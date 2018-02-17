const add = function(a, b){
    console.log(arguments);
    return a + b;
};

const addArrow = (a, b) => {
    // console.log(arguments); (no longer available use ES5 functions instead)
    return a + b;
};

console.log(add(55, 1, 101));

const user = {
    name: "Emre",
    cities: ["İzmir", "İstanbul", "Beijing"],
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.cities);
        // workaround
        const that = this;
        this.cities.forEach(function(city){
            console.log(that.name + " has lived in " + city);
        });
    }
};

user.printPlacesLived();

// will work without a workaround
const user2 = {
    name: "Kamil",
    cities: ["İzmir", "İstanbul", "Beijing"],
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.cities);
        
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });
    }
};

user2.printPlacesLived();

// ES6 function definition
const user3 = {
    name: "Mahmut",
    cities: ["İzmir", "İstanbul", "Beijing"],
    printPlacesLived(){
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });
    }
};

user3.printPlacesLived();

// using map method instead of forEach
const user4 = {
    name: "Memduh",
    cities: ["İzmir", "İstanbul", "Beijing"],
    printPlacesLived(){
        console.log(this.name);
        console.log(this.cities);

        const cityMessages = this.cities.map((city) => {
            return this.name + " has lived in " + city;
        });

        return cityMessages;
    }
};

console.log(user4.printPlacesLived());

// challenge area
const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 10,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());