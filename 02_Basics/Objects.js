//singleton --> unique(made through constructor)

//object literals
//const JsUser = {}       //<-- Object
const mySum = Symbol("key1")

const JsUser = {
    name : "Rohit",
    "full name" : "Rohit Pandey",       //Cannot be accessed directly or by conventional method
    age : 20,
    //[mySum] : "myKey1",             //same
    location : "Jaipur",
    email : "rohit@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
// console.log(JsUser.email)       //Conventional Method
// console.log(JsUser["email"])        //Preferable Method
// console.log(JsUser.fullname)
// console.log(JsUser["fullname"])
// //console.log(typeof JsUser.mySum)        //String
// console.log(JsUser[mySum])

//Freeze
JsUser.email = "rohit@chatgpt.com"
//Object.freeze(JsUser)     //  unfreeze before executing
JsUser.email = "rohit@microsoft.com"
//console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello JS User")
}
//console.log(JsUser.greeting())

//console.log(JsUser.greeting)
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)      //Use of this keyword
}
//console.log(JsUser.greetingTwo())

//const tinderUser = new Object()
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false
//console.log(tinderuser)

//There are different ways of creating and writing and structure of objects

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "rohit",
            lastname  : "pandey"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
//const obj3 = {obj1 , obj2}
//console.log(obj3)
const obj3 = {...obj1,...obj2}      //Preferable
//console.log(obj3)

// const users = [
//     {
//         id : 1,
//         email : "a@gmail.com"
//     }
//     {
//         id : 2,
//         email : "b@gmail.com"
//     }
// ]

// users[1].email

//Accessing keys and values
// console.log(tinderuser)

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

//De structuring
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
//course.courseInstructor

//Method 1 for destructuring
const {courseInstructor} = course   //konsi value kha se
console.log(courseInstructor)

//Method 2
const {courseInstructor : instructor} = course
console.log(instructor)

//Method 3
const navbar = ({company}) => {

}

//API'S --> apna kaam dusron se karwana