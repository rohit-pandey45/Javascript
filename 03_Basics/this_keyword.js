const user = {
    username : "Rohit",
    price : 999,

    WelcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        //it is compulsory to write this here . Otherwise answers may vary due to scope
    }
}
// user.WelcomeMessage
// user.WelcomeMessage()
// user.username = "Sam"
// user.WelcomeMessage()

//console.log(this)       //{} here and window object in browser


//THIS IS USED ONLY INSIDE AN OBJECT NOT INSIDE A FUNCTION
// function chai(){
//     let username = "Rohit"
//     console.log(this.username)
// }
// chai()
// const chai = function(){
//     let username = "Rohit"
//     console.log(this.username)
// }
// chai()

//ARROW FUNCTION
const chai = () => {
    let username = "Rohit"
    console.log(this.username)
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2        //EXPLICIT RETURN
// }
// console.log(addTwo(3,4))

// const addTwo = (num1,num2) => (num1+num2)           //IMPLICIT RETURN
// console.log(addTwo(3,4))

const addTwo = (num1,num2) => ({username : "hitesh"})       //Wrapped in Parenthesis
console.log(addTwo(1,2))