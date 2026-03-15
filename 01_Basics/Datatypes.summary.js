//Primitive
//7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
const id = Symbol('123');
const anotherId = Symbol('123')
// console.log(id == anotherId);
//DYNAMICALLY TYPED LANGUAGE --> JS

//Reference(Non Primitive)
//Array, Objects (within {}), Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "Rohit",
    age : 20
};
// const myFunction = function(){
//     console.log("Hello World");
// }
// console.log(typeof scoreValue);

// *********************************
//Stack(Primitive), Heap(Non-Primitive)
let myYoutubename = "rohit46"
let anothername = myYoutubename
anothername = "chaiaurcode"
// console.log(myYoutubename)
// console.log(anothername)


//HEAP
let UserOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let UserTwo = UserOne
UserTwo.email = "rohit45@google.com"
console.log(UserOne.email);
console.log(UserTwo.email);