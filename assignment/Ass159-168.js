console.log(window.location.protocol); 

let myBirthday =new Date("1997-6-7");
console.log(`${myBirthday.getTime() /1000} Seconds `);
console.log(`${myBirthday.getTime() /1000/60} Minutes `);
console.log(`${myBirthday.getTime()/1000/60/60} Hours`);
console.log(`${myBirthday.getTime()/1000/60/60/24} Days `);
console.log(`${myBirthday.getTime()/1000/60/60/24/30} Months `);
console.log(`${myBirthday.getTime()/1000/60/60/24/30/12} Years`);

// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

console.log("#".repeat(30)); 
//==========================> #-> 2

let time =new Date("Tue Jan 01 1980 00:00:01 GMT+0200");
time.setFullYear(1990)
time.setHours(0)
console.log(time); 
console.log(); 



// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

let Month =["Jan" ,"Feb", "March" ,"May" , "June", "July", "August", "September", "October", "November", "December"];


console.log("#".repeat(30)); 
console.log(Month); 
//==========================> #-> 3
let lastM_d =new Date();
lastM_d.setFullYear(2024,1,0)
console.log(lastM_d); 
console.log(`Previous Month Is ${Month[lastM_d.getMonth()]} And Last Day Is ${lastM_d.getDate()} `); 

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"




console.log("#".repeat(30)); 
console.log(); 
//==========================> #-> 4

let Birthday = new Date ( "Jun ,7 1997");
console.log(Birthday); 

let Birthday1 = new Date ();
Birthday1.setFullYear(1997,5,7);
Birthday1.setHours(0,0,0);
console.log(Birthday1); 

Date.parse("Jun ,7 1997")
let Birthday2 = new Date ();
Birthday2.setTime(Date.parse("Jun ,7 1997"));
console.log(Birthday2); 


console.log("#".repeat(30)); 
//==========================> #-> 5

const start = performance.now();

for (let index = 0; index < 100; index++) {
console.log(index); 
    
}
const end = performance.now();
let timer=Math.floor((end - start));
console.log(`Loop Took ${timer} Milliseconds.`); 

console.log("#".repeat(30)); 
console.log(); 
console.log(); 
//==========================> #-> 6


// Write Your Generator Function Here

function* gen() {
    
    // console.log(index); 
    let [index ,sum] =[140 ,14];

    yield sum;
    yield sum+=index;
    while (true) {
    yield sum+=index+=200;        ;

}
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}



console.log("#".repeat(30)); 
console.log(); 
//==========================> #-> 7

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here
function* genAll() {
    yield* new Set([1, 2, 2, 2, 3, 4, 5]);
    yield*  new Set(["A", "B", "B", "B", "C", "D"]);
 
}
  
  // Write Your Generator Function Here
  
  let generator1 = genAll();
  
  console.log(generator1.next()); // {value: 1, done: false}
  console.log(generator1.next()); // {value: 2, done: false}
  console.log(generator1.next()); // {value: 3, done: false}
  console.log(generator1.next()); // {value: 4, done: false}
  console.log(generator1.next()); // {value: 5, done: false}
  console.log(generator1.next()); // {value: "A", done: false}
  console.log(generator1.next()); // {value: "B", done: false}
  console.log(generator1.next()); // {value: "C", done: false}
  console.log(generator1.next()); // {value: "D", done: false}
  console.log(generator1.next()); // {value: "undefined", done: true}


console.log("#".repeat(30)); 
console.log(); 
//==========================> #-> 8
// import * as modOne from "./ASs159-modsTwo";
// import calc from "./ASs159-modsOne";


// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
