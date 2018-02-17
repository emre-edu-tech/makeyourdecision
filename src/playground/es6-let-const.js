var nameVar = "Emre";
var nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
// nameConst = "Çınar";
console.log("nameConst", nameConst);

function getPetName(){
    var petName = "Kamil";
    return petName; 
}
// console.log(petName);

// Block Scoping
// const and let variables are block scoped.
// var type variables are function scoped.
const fullName = "Emre Kayıkçılar";
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);