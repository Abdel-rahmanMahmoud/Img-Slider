// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 * 3 * 190 % 10 * 400);  // 0
let num = 3;
let bollen = true;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + +bollen + +bollen + +bollen ); // 6

// Soultion Three
console.log(num * ++bollen); // 6

// Soultion Four
console.log( num ** num / num - num); // 6

// Solution Five
console.log(num * --num); // 6

// Solution Six
console.log(num * num + num ); // 6
let num2 = "10";
let bollen2 = true;


// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(+num2 + ++num2 - bollen2); // 20

// Solution Three
console.log(--num2 * ++bollen2 ); // 20

// Solution Four
console.log(+num2 * +num2 / +num2 + +num2 ) ; // 20

let points = 10;
let bollen3 = true;


// Write Your Code Here
points +=3;
console.log(points); // 13

// Write Your Code Here
points -= 3;
console.log(points - ++bollen3); // 8;