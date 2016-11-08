// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
//
// Palindromes are words that are the same
// going forwards and backwards. Examples:
//
// i
// dod
// meeteem
// TrickirT

function isPalindrome(str){
  //start with everything passes
  if (typeof str === 'undefined') { //if nothing in string then it passes
    return true;
  } else { //seperate those that will NOT pass
    //reverse the string
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    //does the string reversal equate to the reg str?
      if (newString !== str) {
        return false;
      }
    }

  return true; //returns those that ARE palindromes
}

// tests

console.assert( isPalindrome("tacocat") === true )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )
