/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(...Info){
    let Name
    let Age
    let Status  
for(let i= 0 ; i < Info.length ; i++ ) {
if (typeof Info[i] === "string"){
Name=Info[i];
}
else if (typeof Info[i] === "number"){
     Age=Info[i];
}
else if (typeof Info[i] === "boolean"){
 Status = Info[i];
}
}

if (Status === true ){
console.log(`"Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire"`);
}
else {
console.log(`"Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire"`);
}
}


// showDetails()
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("=".repeat(40));
 // حل اخر اسهل 

function showDetails2(a , b , c){ 
let info =[a,b,c];

( info.sort()[2] === true ) ? ( console.log(`"Hello ${info.sort()[1]}, Your Age Is ${info.sort()[0]}, You Are Available For Hire"`))
:(console.log(`"Hello ${info.sort()[1]}, Your Age Is ${info.sort()[0]}, You Are Not Available For Hire"`));
// هاض شكلها بجملة اف العادية
// if (info.sort()[2] === true ){
// console.log(`"Hello ${info.sort()[1]}, Your Age Is ${info.sort()[0]}, You Are Available For Hire"`);
// }
// else {
//     console.log(`"Hello ${info.sort()[1]}, Your Age Is ${info.sort()[0]}, You Are Not Available For Hire"`);
// }
}
showDetails2("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails2(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails2(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails2(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"