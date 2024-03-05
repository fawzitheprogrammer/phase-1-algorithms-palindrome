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







// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

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
