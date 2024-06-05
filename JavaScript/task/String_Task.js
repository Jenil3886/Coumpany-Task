
// 1. string to array with first letter capital

let str = "ipsum dolor sit amet";
let words = str.split(" ");

let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

console.log(capitalizedWords);


// 2. check string pelindrom or not 


 function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return "it is not a palindron";
        }
        j--;
     }

    return "it is palindron";

 }

let str1 = "naman a naman";
let str2 = "lorem epsum dolor";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));


// 3. worde is asending order with capital

let string = "ipsum dolor sit amet";

let word = str.split(" ");
words.sort();

let capitalizedWord = word.map(word => word.charAt(0).toUpperCase() + word.slice(1));


let letters = [...capitalizedWord]

let result = letters.join(" ");

console.log(result);

// 4. 'a' carector are repeat and how many time


let strj = 'aaaabbbcccccd';
let stri = 'motavarachasurat';
let countt = 0;
let count = 0;


for (let i = 0; i < strj.length; i++) {
   if (strj[i] === 'a') {
      countt++;
   }
   console.log
}
console.log("The character 'a' is repeated", countt, "times.");

for (let i = 0; i < stri.length; i++) {
   if (stri[i] === 'a') {
        count++;
    }
    console.log
 }
 console.log("The character 'a' is repeated", count, "times.");