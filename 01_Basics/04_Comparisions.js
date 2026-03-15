// console.log(2 > 3);
// console.log(2 >= 1);
// console.log(2 != 1);
// console.log(2 == 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
//The reason is that an equality check == and comparisions > < >= <= work differently. Comparisions convert null to a number, treating it as 0. That's why (3) null >= 0 is true and null > 0 is false.
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

//strict check === (checks data type as well)
console.log("2" == 2);
console.log("2" === 2);