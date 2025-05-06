let start = 10;
let end = 100;
let exclude = 40;

for(;start <= end ; start=start+10 ){
   if(start!= exclude) {
    console.log(start);
}
}
// حل اخر
 start = 10;
 end = 100;
exclude = 40;
for(let i = start; i <= end; i += start){
    if (i === exclude){
        continue;
    }
    console.log(`${i}`);
}

console.log("=".repeat(40));


console.log("===================");

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
let start2 = 10;
let end2 = 0;
let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

for(;start2 > end2 ; start2-- ){
 if(start2.toString().includes(end2)){
    console.log(start2.toString());
}
else if (start2.toString().includes(end2) == false && start2!==stop){
    console.log(end2.toString() + start2.toString());
}
else{
    console.log(end2.toString() + start2.toString());
    break; 
 }
}

// another solution
 start2 = 10;
 end2 = 0;
 stop = 3;
 
for(;start2 >= stop ; start2-- ) {
 if(start2.toString().includes(end2)){
    console.log(start2.toString());
}
else{
    console.log(`${end2}${start2}`);
}
}

console.log("===================");

let start3 = 1;
let end3 = 6;
let breaker = 2;
 
for(;start3 <= end3 ; start3++ ) {

       console.log(start3);
       console.log(`-- ${breaker}`);
       console.log(`-- ${breaker + breaker}`);
   
   }
//    حل  اخر
let startTwo = 1;
let endTwo = 6;
let breaker2 = 2;

for(let k = startTwo; k <= endTwo; k++){
    console.log(`${k}`);
    for (let l = breaker2; l < endTwo; l += breaker2){
        console.log(`-- ${l}`)
    }
}

   

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
console.log("===================");
let index2 = 10;
let jump2 = 2;

for (; index2 > jump2 ;index2-=jump2) {
    console.log(index2);
}
// Output
10
8
6
4
console.log("===================");
// حل اخر

let index = 10;
let jump = 2;
let endThree = 0;
let m = index;

for (;;) {
    // Write Your Code Here
    if(m >= endThree){
        console.log(`${m}`);
    }
    if (m === jump + jump){
        break;
    }
    m -= jump
}

console.log("===================");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

number = letter.length;
for (let o = 0; o < friends.length; o++){
    if(friends[o].startsWith(letter.toUpperCase())){
        continue;
    }
    console.log(`"${number} => ${friends[o]}"`);
    number++
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
console.log("=".repeat(40));
console.log(typeof("D") === typeof("d"));

let start4 = 0;
let swappedName = "elZerO";
let swappedName2= "";

for (; start4 < swappedName.length ; start4++ ){
    if (swappedName[start4] === swappedName[start4].toUpperCase()){
        console.log(swappedName[start4].toLowerCase());
        swappedName2= swappedName2 + swappedName[start4].toLowerCase();
    }
    else{
        console.log(swappedName[start4].toUpperCase());
        swappedName2= swappedName2 + swappedName[start4].toUpperCase();
    }
}
console.log(swappedName2);
// Output
// "ELzERo"
console.log("=".repeat(40));

let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for( start5 += start5.toString().length ; start5 < mix.length ; start5++ ){
if ( typeof mix[start5] == "number"){
    console.log(mix[start5]);
}
}

// }
// Output
// 2
// 3
// 4
console.log("=".repeat(40));
// حل اخر 
let startFour = 0;
let mix2 = [1, 2, 3, "A", "B", "C", 4];

for(let v = startFour + mix2.indexOf(2); v < mix2.length; v++){
    if(typeof mix2[v] === "string"){
        continue;
    }
    console.log(mix2[v]);
}
console.log("=".repeat(40));

console.log("=".repeat(40));
let friendss = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index3 = 0;
let counter = 0;
while( index3 < friendss.length ){
if ((typeof friendss[index3] === "string" && !(friendss[index3].startsWith("A")))){
    console.log(`${++counter} => ${friendss[index3]}`);

    index3++;
        
}
index3++;
}

console.log("=".repeat(40));
// حل اخر

 friendss = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
 index3 = 0;
 counter = 0;
while( index3 < friendss.length ){
if ((typeof friendss[index3] === "number" || friendss[index3].startsWith("A"))){
    index3++;
        continue;
}
console.log(`${++counter} => ${friendss[index3]}`);
index3++;
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"