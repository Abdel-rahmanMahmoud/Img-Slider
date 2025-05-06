
/*
Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice( zero , ++counter ).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero , --counter ).reverse()); // ["Elham", "Mazero"]

console.log(my[2].slice(--zero ,  --counter  ) + my[1].slice(counter++) ); // "Elzero


console.log(my[1].slice(++counter , -(++zero)) + my[1].slice(-(zero)).toUpperCase() ); // "rO"