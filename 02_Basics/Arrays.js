//Ways of Defining Array
const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "Naagraj"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])

//Methods
myArr.push(6)
//console.log(myArr)
myArr.pop()
//console.log(myArr)
//myArr.shift(9)              //TOO TIME TAKING
// console.log(myArr)
//myArr.shift(0)
// console.log(myArr)

//console.log(myArr.includes(4))      //BOOLEAN
//console.log(myArr.indexOf(9))       //NOT PRESENT IN THE ARRAY

const newArr = myArr.join()
//console.log(myArr)
//console.log(newArr)     //TYPE --> STRING

//SLICE  -->  Do not manipulates original array(Stack)   / SPICE  --> Manipulates original array
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])
//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)

const allHeros = [...marvel_heros,...dc_heros]
//console.log(allHeros)

const another_array = [1,2,3,[4,5,6],7,8,[9,10]]
//console.log(another_array.flat(Infinity))

//Special Cases
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name : " Hitesh"}))     //specified value of array {key : value}