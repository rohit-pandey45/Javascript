const score = 500
//console.log(score)      //JS automatically decides the data type of variable
//But we can still explicitly decide the data type of a variable

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toFixed(2))

// const OtherNumber = 123.4567
// console.log(OtherNumber.toPrecision(4))
// const OtherNumber = 1123.8967
// console.log(OtherNumber.toPrecision(2))

const Hundrerds = 1000000
// console.log(Hundrerds.toLocaleString())
// console.log(Hundrerds.toLocaleString('en-IN'))

//MATH FUNCTIONS
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.abs(4))
// console.log(Math.round(4.3))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.6))
// console.log(Math.min(2,3,4,6))
// console.log(Math.max(2,3,4,6))


//RANDOM FUNCTION       //Genarate a number between 0 and 1
// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10))
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min)))            //Output can be anything
console.log(Math.floor(Math.random()*(max-min+1)))          //Output will always be between 0 and max
console.log(Math.floor(Math.random()*(max-min+1))+min)      //Output will be always between min and max
