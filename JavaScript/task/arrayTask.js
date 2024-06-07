// 1. Get all the number from array 

let arr = [1, 3, "Test", 0, "", -1, null, undefined, "Hello World", "hello", "workd", 54, false, true, "-0", "null"];

let number = arr.filter(element => typeof element === 'number')

console.log(number)

// 2. Get all the string from array

let string = arr.filter(element => typeof element === 'string')

console.log(string)

// 3. Get all falsy values from array

let falsy = arr.filter(value => !value)

console.log(falsy)

// 4. Get all truty values from array

let truty = arr.filter(Boolean)

console.log(truty)

// 5. Get sum of all number in array

let sum = arr
  .filter(element => typeof element === 'number')  // Step 1: Filter out only numbers
  .reduce((acc, curr) => acc + curr, 0);           // Step 2: Sum the numbers

console.log(sum);  

// 6. Get all values which includes "e"

let valueWithE = arr.filter(item =>{
  return typeof item === "string" && item.includes("e")
})  

console.log(valueWithE)