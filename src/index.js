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
        newString += str[i];
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

//-----------------------------------------------------------------------------

// write a function on the Array prototype
// called groupBy(callback) the takes a callback
// function. For each item in groupBy, callback's
// arguments will be (value, index, array).
//
// The value returned by the callback becomes the
// key for the original value in a new collection.
//
// i.e.
//
// [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })
//
// //--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }
//
// Array.prototype.groupBy = function(callback){
//     var newGroups = {};
//     for (var i = 0; i < this.length; i++) {
//       var currentItem = this[i];
//       var result = callback(currentItem, i, this);
//       if (typeof newGroups[result] === 'undefined'){
//         newGroups[result] = [currentItem];
//       } else{
//         newGroups[result].push(currentItem);
//       }
//   }
//       return newGroups;
// }
//
//
//
// var groups = [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })
//
// console.log(groups);
//--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }
//-----------------------------------------------------------------------------

//utility for logging

if(!log)
    var log = function(){ console.log([].slice.call(arguments)) }

var FILL_ME_IN

// predefined variables
var whatIsThis = function(a, b) {
    return [this, a, b].join(',')
}

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
}

var inAFunction = function(a, b) {
    this.name = 'Sally'
    whatIsThis(a, b)
}

inAFunction.prototype.test3 = whatIsThis

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
}

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
}
//
// /**
//  * THE PROBLEMS
//  */
//
console.assert(whatIsThis('hello', 'world') === '[object Window],hello,world')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is in the global scope and the function prints the other two parameters with only a comma between


console.assert(window.whatIsThis('hello', 'world') === '[object Window],hello,world')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is implicitly defined and the function prints the other two parameters with only a comma between


console.assert(inAnObject.test1('face', 'book') === '[object Object],face,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the object->inAnObject and then in the test1 key the value is a that function prints the other two parameters with only a comma between


console.assert(inAnObject.anotherObject.test2('twitter', 'book') === '[object Object],twitter,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the object->inAnObject and then in the test1 key the value is a that function prints the other two parameters with only a comma between


console.assert(whatIsThis.call() === '[object Window],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the global scope and since call is not passed into anything it only prints 2 commas


console.assert(whatIsThis.call(trickyTricky) === '[object Object],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the explicit trickyTricky and call is passed an object, not parameters so it prints the 2 commas

console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === '[object Object],nice,job')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the explicit trickyTricky and call is passed an object and the 2 parameters that it prints

console.assert(whatIsThis.call(confusing) === '[object Object],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the explicit confusing and call is passed an object, not parameters so it prints the 2 commas


console.assert(whatIsThis.call(confusing, 'hello') === '[object Object],hello,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the explicit confusing and call is passed an object, with a single parameter that prints beside another comma


console.assert(whatIsThis.apply(trickyTricky) === '[object Object],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the explicit trickyTricky and call is passed an object, not parameters so it prints the 2 commas

console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === '[object Object],nice,job')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the explicit confusing and call is passed an object, and the array of 2 parameters

//console.assert(whatIsThis.apply(confusing, 'nice', 'job') === '[object Object],nice,job')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//'this' is the explicit confusing and call is passed an object, but not an array which is required for .apply so it errors out


console.assert(inAFunction('what will', 'happen?') === undefined)
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//this is undefined because the inAFunction runs whatIsThis but is not passed enough parameters


try{
    console.assert(inAFunction.test3('A', 'B') === TypeError)
} catch(e){
    log(e)
}
// Once you've figured out what the output/result is, answer here in a comment: Why is this so?
//I get an error while running this and I am not sure what 'e' is


var newObject = new inAFunction('what will', 'happen?')
console.assert(newObject.name === 'Sally')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//we create a newObject using the inAFunction constructor while passing in parameters then we call the newObject function which has a name attached using this which is called at this time


var newObject2 = new inAFunction('what will', 'happen?')
console.assert(newObject2.test3('C', 'D') === '[object Object],C,D')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//not sure how to explain this one.


console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === '[object Object],face,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//we call the inAnObject var that runs the whatIsThis function which takes an object(trickyTricky) and the parameters and returns the output


console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === '[object Object],foo,bar')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//we call the inAnObject.anotherObject.test2 var that runs the whatIsThis function which takes an object(confusing) and the parameters in an array and returns the output



//-----------------------------------------------------------------------------
//
// 1. Create a simple constructor function called `Foo` and create a new instance from it called `foo`.

function Foo() {
};
var foo = new Foo ();
// assertions
console.assert(foo instanceof Foo)

// // 2. Create a constructor function called `Dog` that sets a property on itself within the constructor. The property should be called `says` and the value should be `life is ruff`

function Dog() {
  this.says ='life is ruff'
};
// assertions
console.assert(new Dog().says === "life is ruff")

//
// 3. Create a constructor function called `Cat` that has a method on it's prototype called `growl` that returns the string `meow`; create an instance of this called `cat`

function Cat() {
};
Cat.prototype.growl = function () {
  return 'meow';
};
var cat = new Cat ();
// assertions
console.assert(cat instanceof Cat)
console.assert(cat.growl() === "meow")

// // 4. Create a constructor called `KeepSecret`. The constructor function itself should accept a parameter called `secret` it should store this in a private variable (use a closure). Add a method to the prototype that is called `squeal` that returns the secret string.

var KeepSecret = (function (secret) {
  var private = secret
  return function () {return secret;}
})();

KeepSecret.prototype.squeal = function (secret) {
  return secret;
};

// assertions
var mySecret = "My class rocks!"
var dontTellNobody = new KeepSecret(mySecret);
console.assert(dontTellNobody.squeal() === mySecret)
//
// // 5. Create a constructor called `Key`. Create another constructor called `Safe`. Make the Safe constructor take 2 arguments. The first argument can be any piece if data to keep safe. This must be stored using a private variable like you did with KeepSecret. The 2nd param to the `Safe` constructor needs to be an instance of `Key` you need to store it privately as well. Add a function to the Safe prototype called `unlock` that accepts a key. If the key matches the key that was used to create the Safe; then return the secret data.
//
// // assertions
// var sensitive = "shhhhh!"
// var rightKey  = new Key()
// var wrongKey  = new Key()
// var safe      = new Safe(sensitive, rightKey)
//
// console.assert(safe.unlock(wrongKey) !== sensitive)
// console.assert(safe.unlock(rightKey) === sensitive)
//
// // --------------------------------------------------------------- //
//
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// ////                                                             ////
// ////                  ___                                        ////
// ////                 / _ )___  ___  __ _____                     ////
// ////                / _  / _ \/ _ \/ // (_-<                     ////
// ////               /____/\___/_//_/\_,_/___/                     ////
// ////                                                             ////
// ////                                                             ////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
//
// // Bonus. -------------------------------------------------------- //
//
// // Create a constructor called `Validator`. Give it a method on it's
// // prototype called `email` that takes a string and returns true if
// // the string is a valid email address and false if it is not.
//
//
//
// // assertions
//
// if (typeof Validator === "function") {
//   var valid = new Validator()
//   console.assert(valid.email("name@theironyard.com"))
//   console.assert(!valid.email("name-at-theironyard.com"))
// }
