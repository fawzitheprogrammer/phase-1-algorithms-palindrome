function isPalindrome(word) {
  

  let lowerCaseWord = word.toLowerCase();
  let splittedWord = lowerCaseWord.split('');
  let reversedWord = splittedWord.reverse();
   
  let fullyReversedWordJoined = reversedWord.join('');

   if(fullyReversedWordJoined==lowerCaseWord){
    return true;
   }
   else{
    return false;
   }
}


isPalindrome('Fawzi');







/* 
  
The isPalindrome function checks if a given word is a palindrome (reads the same backward as forward). Here's a concise outline of its logic:

Convert the input word to lowercase to ignore case differences.
Split the lowercase word into an array of its characters.
Reverse the array of characters.
Join the reversed array back into a string.
Compare the joined, reversed string to the original lowercase word:
If they are the same, return true indicating the word is a palindrome.
Otherwise, return false indicating the word is not a palindrome.
*/
/*
  Add written explanation of your solution here
*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("Fawzi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Maram"));
}

module.exports = isPalindrome;
