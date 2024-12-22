let word1 = prompt("Enter the first word: RACECAR");
let word2 = prompt("Enter the second word: RECORDER");

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log("Original word 1: " + word1);
console.log("Reversed word 1: " + reverseString(word1));
console.log("Original word 2: " + word2);
console.log("Reversed word 2: " + reverseString(word2));

console.log("Is word 1 a palindrome? " + (word1 === reverseString(word1)));
console.log("Is word 2 a palindrome? " + (word2 === reverseString(word2)));
