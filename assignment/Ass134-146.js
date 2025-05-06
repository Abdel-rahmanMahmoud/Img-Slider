let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let reg =/\d{4}:\w+:(\d{4}:?)+/ig ;
console.log(ip.match(reg));

console.log("#".repeat(25));
// ==============>2

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let reg0 =/\bos\d*o/ig ;
console.log(specialNames.match(reg0));

// Output
// ['Os10O', 'OsO', 'Os100O']

console.log("#".repeat(25));
// ==============>3

let phone = "+(995)-123 (4567)";
let reg1 =/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig ;
// let reg1 =/\+\(\d{3}\)-\d{3} \(\d{4}\)/ig ;
console.log(phone.match(reg1));

console.log("#".repeat(25));
// ==============>4
let re0 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;


console.log("#".repeat(25));
// ==============>5 
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}\s?\W?\s?\d{2}\s?\W?\s?\d{2,4}/; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"


console.log("#".repeat(25));
// ==============>6
