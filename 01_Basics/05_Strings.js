const name = "Rohit"
const repo = 50
//console.log(name + repo + " pandey")        //Outdated Way

//Use of Backticks (String Interpolation)
//console.log(`Hello my name is ${name} and my repo count is ${repo}`);

//Another Way of defining String
const gameName = new String('Rohitfc')
//console.log(gameName)
//console.log(gameName[0])        //Do not consider it as an array it is an object{key value pair}

// console.log(gameName.__proto__)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('f'))
//console.log(gameName.substring(0,5))
//console.log(gameName.substring(-1,5))       //No Effect
// console.log(gameName.slice(0,4))
// console.log(gameName.slice(-8,4))
// console.log(gameName.slice(-7,4))

//For Trimming Spaces
const newStringone = "     Rohit     "
// console.log(newStringone)
// console.log(newStringone.trim())

const url = "https://rohit.com/rohit%20pandey"
// console.log(url)
// console.log(url.replace('%20',' '))
// console.log(url.replace('%20','_'))
// console.log(url.includes('rohit'))
// console.log(url.includes('roy'))
console.log(gameName.split('-'))