// 1. Get all the number from array 

let arr = [1, 3, "Test", 0, "", -1, null, undefined, "Hello World", "hello", "workd", 54, false, true, "-0", "null"];

let number = arr.filter(element => typeof element === 'number')

console.log(number)

// 2. Get all the string from array

let string = arr.filter(element => typeof element === 'string')

console.log(string)