//For of

//[{}, {}, {}]

const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }
const greetings = "Hello World!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")      //Stores unique value
//console.log(map)

// for (const [key,value] of map) {
//     console.log(key, ':-', value)
// }

//Maps are iterable but objects are not
// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }

// for(const [key, value] of myObject){
//     console.log(key, ':-', value)
// }

//Objects can be iterated through for in loop
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}
// for (const key in myObject) {
//     //console.log(key)
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }

//For in loop is used in arrays 
//ARRAYS ALSO STORE KEY VALUE PAIR WHERE KEY IS THE INDEX VALUE AND VALUE IS ELEMENTS IN THAT INDEX
//MAP IS NOT ITERABLE THROUGH FOR IN LOOP

//FOR EACH LOOP
const coding = ["js","ruby","java","python","cpp"]
// coding.forEach( function (val){
//     console.log(val)
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
})