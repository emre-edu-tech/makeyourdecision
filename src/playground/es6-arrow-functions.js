const square = function(x){
    return x * x;
};
console.log(square(10));

/*
const squareArrow = (x) => {
    return x * x;
};
*/

const squareArrow = (x) => x * x;
console.log(squareArrow(9));

// challenge
const getFirstName1 = (fullname) => {
    return fullname.split(" ")[0];
};
const getFirstName = (fullName) => fullName.split(" ")[0];
// usage
console.log(getFirstName1("Ebru Çetin"));
console.log(getFirstName("Kemal Yılmaz"));