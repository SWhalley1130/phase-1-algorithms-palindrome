function isPalindrome(word) {
  word=word.toLowerCase();
  let reverseWord=word.split('').reverse().join('');
  return(word===reverseWord);
}

console.log(isPalindrome("mom"))

/* 
  Add your pseudocode here

1. Split string in half to make 2 strings
   -if odd, omit the middle element (.replace(charAt(Math.floor(str.length/2)), "")
2. Using substr : for str1 (0, origString.length/2), for str2 (origString.length/2, origString.length-1)
3. Reverse 2nd string : str2=str2.split('').reverse().join('')
4. If str1===str2 :true!

   a s d f g
   0 1 2 3 4


Try 2: Just reverse the string and check if theyre equal lol

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
