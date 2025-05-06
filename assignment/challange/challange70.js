/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function (...peopleNames) {
  // Parameter ?
  return `String [${peopleNames.join("], [")}] => Done !`;
};
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// التحويل الى => arow function 

// let names2 = (...peopleNames) => { return `String [${peopleNames.join("], [")}] => Done !`};

// console.log(names2("Osama", "Mohamed", "Ali", "Ibrahim"));

// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

let names2 = (...fullNames) => `String [${fullNames.join("], [")}] => Done !`;
    // Parammeter ?

console.log(names2("Osama", "Mohamed", "Ali", "Ibrahim"));
console.log("=".repeat(40));


/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => { return one + two + +nums };
console.log(calc(10, myNumbers[0] , myNumbers[1])); // 80


let calc2 = function (one, two, ...nums)  {
  return one + two + +nums ;
};

console.log(calc2(10, myNumbers[0] , myNumbers[1])); // 80