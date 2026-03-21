//How to define a Function??
function sayMyName(){

}
sayMyName()
//In JS we do not give the data type of the variables when we pass

//ADD TWO NUMBERS
function addTwoNumbers(number1,number2){
    //console.log(number1+number2);
    let result = number1 + number2;
    return result
}
// addTwoNumbers(3,4);
// addTwoNumbers(3,"4");
// addTwoNumbers(3,"a");

const result = addTwoNumbers(3,5)
//console.log("Result :", result);     //Why Undefined ? because we have not returned any value from the function

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter Username")
        return 
    }
    return `${username} Just Logged In`
}
// console.log(loginUserMessage())
// console.log(loginUserMessage("Rohit"))


//(...)--> REST/SPREAD Operator
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))
function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))
function calculateCartPrice(val1,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))
const user = {
    username : "Rohit",
    prices : 199
}
function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`)
}
// handleobject(user)
// handleobject({
//     username : "Sam",
//     prices : 399
// })

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))