function isPalindrome(word) {
  // Write your algorithm here
  let check = /[^A-Za-z0-9]/g;
  let lowReg = word.toLowerCase().replace(check, '');
  let reverStr = lowReg.split('').reverse().join('');
  return reverStr === lowReg
}

/* 
  1. To start we need to lowercase all the words that we passing in to the function; - done w/ .toLowerCase()
  2. We need to remove/replace all special/unwanted characters from the palindrome check; - done w/ .replace() & RegExp /[^A-Za-z0-9]/g
  3. We need to break strings into letters, reverse them & assable again; - done w/ chain of .split() .reverse() .join(), for .split() & .join() we shoud pass empty string ''
  4. We need to check that first & last, second & next to last and so on, letters were matching; - we need to compare lower register string to reverse string;
  5. We need to return true;
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
