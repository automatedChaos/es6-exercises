'use strict';

/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-22T17:15:44+01:00
*
* Traditionally we use the var declaration to instanitate variables.
* In this file we will learn how we can improve on this using const and let
*
*/

// Out with the old, in with the new!
var oldLangName = 'ECMAScript (ES5)'; // var is function scope (){} or global
var oldLangRelDate = 2009;

function outputOldLang() {
  var output = oldLangName + ' was released in ' + oldLangRelDate;
  return output;
}

// Action 1: explain why the statement below causes an error and
// then fix it so it outputs correctly
//console.log(output)


// After es6
var newLangName = 'ECMAScript 2015 (ES6)'; // const is block scoped and is read-only
var newLangRelDate = 2015; // let is block scope {}


// ACTION 2: uncomment the line below, why does this cause an error?
// newLangName = "JavaScript";


// ACTION 3: let signifies a variable that is only accessible in the code block
// it was instantiates in. Explain why the code below causes and error.
var a = 5;

if (a > 1) {
  var b = a * 3;
  console.log(b);

  for (var i = a; i <= b; i++) {
    var j = i + 10;
    console.log(j);
  }

  //let c = a + b + j;
  //console.log(c);
}

// Action 4: let declarations are only accessible when they appear.
// var declarations are availabe to the whole scope. In pure es6 the code below
// would throw an an error. Why do you think this is so? (hint: Google Temporal Dead Zone (TDZ)
{
  console.log(var1);
  console.log(let1);

  var var1 = 'Java';
  var let1 = 'Script';
}