//if
// if(condition = true){

// }

// if(2 == "2"){       //checks only the value of the number
//     console.log("executed")
// }
// if(2 === "2"){      //Checks data type as well as value of the number
//     console.log("executed")
// }

//Scope
//we can not use a variable outside the if block if we have defined the variable in the if block.
//const,let --> cannot use but var --> can use
// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User Power : ${power}`);
// }
// console.log(`User Power: ${power}`);
// const score = 200
// if(score > 100){
//     var power = "fly"
//     console.log(`User Power : ${power}`);
// }
// console.log(`User Power: ${power}`);

const bal = 100
// if(bal > 500)   console.log("test"), console.log("test2");

//and --> &&, or -->||

//Switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3
// switch (month) {
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("mar")
//         break;
//     case 4:
//         console.log("apr")
//         break;

//     default:
//         console.log("default case match")
//         break;
// }
//Why use Break --> wherever we get true after that all cases run automatically except default, to avoid this we use break

 //TRUTHY VALUE --> without any comparision js treat them as true values
 const user = "rohit"
//  if(user){
//     console.log("true")
//  }else{
//     console.log("false")
//  }
//FALSY VALUES --> false, 0, -0, BigInt, 0n, "", null, undefined, NaN
//Truthy values --> "0", 'false', " ", [], {}, function(){}

// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//     console.log("Object is empty");
// }

//Nullish coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
// console.log(val1)

//Ternary Operator
//condition ? true : false
const tea = 100
tea >= 80 ? console.log("yes") : console.log("no")