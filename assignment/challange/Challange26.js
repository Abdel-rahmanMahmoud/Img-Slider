/*
Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(Math.min(a,b,c,d))); 
// or 
console.log(Math.trunc(Math.min(a,b,c,d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a , Math.trunc(d))); // 10000
// or 
console.log(a ** Math.trunc(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Number(d.toFixed(0)));


// Use Variables b + d To Get This Valus
console.log(((Math.floor(b) / Math.ceil(d)).toFixed(2))); // 66.67 => String
console.log(parseFloat((Math.floor(b) / Math.ceil(d)).toFixed(2))); // 66.67 => number
console.log(Number((Math.floor(b) / Math.ceil(d)).toFixed(2))); // 66.67 => number

console.log(Math.ceil(b) / Math.ceil(d)); // 67 => Number
// or 
console.log(Math.round(b) / Math.ceil(d)); // 67 => Number