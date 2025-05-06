console.log(100 == "100"); // true
console.log(100 !== 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log( typeof 50 == typeof +"-40"); // true
console.log( !( 10 == -"-40")); // true
console.log(+ "10" === 10); // true
console.log( !20 == false); // true
console.log(20 >= false); // true

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 !== num2); // true
console.log(num1 <= num2); // true
console.log(num2 >= num1); // true
console.log(!(num2 == num1)); // true
console.log(!num2 == !num1); // true

let a = 20;
let b = 30;
let c = 10;

console.log(a != b && a > c || a < b); // true
console.log(a != b > a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

let num = 8 ;
num = 15 ;
num = 150 ;
if ( num < 10 ){
    console.log("00" + num.toString())
    console.log(`00${num}`)
}  else if ( 100 > num &&  num >10) {
    console.log("0" + num.toString())
    console.log(`0${num}`)
} else if ( num >= 100){
    console.log(num)
    console.log(`${num}`) 
}


let num3 = 9;
let str3 = "9";
let str4 = "20";

// Output
"{num3} Is The Same Value As {str3}"
"{num3} Is The Same Value As {str3} But Not The Same Type"
"{num3} Is Not The Same Value Or The Same Type As {str4}"
"{str3} Is The Same Type As {str4} But Not The Same Value"
 
if (num3 == str3) {
    console.log("{num3} Is The Same Value As {str3}");
     if (num3 == str3 && typeof num3 != typeof str3)
    {
        console.log("{num3} Is The Same Value As {str3} But Not The Same Type"
        );
    }
}
if (num3 !== str4)
{
    console.log("{num3} Is Not The Same Value Or The Same Type As {str4}"
    );
}
 if (str4 !== str3 && typeof str4 == typeof str3)
{
    console.log("{str3} Is The Same Type As {str4} But Not The Same Value" );
}

let numb1 = 10;
let numb2 = 30;
let numb3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{numb3} Value And Type Is Not The Same As {numb1} And Type Is Not The Same As {numb2}"
if (numb3 > numb1 && typeof numb3 !== typeof numb2){
    console.log('"30 Is Larger Than 10 And Type string Not The Same Type As number"'
    )
if (numb3 == numb2){
    console.log( '"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"')
}
if (numb3 !== numb1 ){
console.log( '"{numb3} Value And Type Is Not The Same As {numb1} And Type Is Not The Same As {numb2}"'
    )

}
}
else if (numb3 !== numb1  && typeof numb3 !== typeof numb2 ){
    console.log('"{numb3} Value And Type Is Not The Same As {numb1} And Type Is Not The Same As {numb2}"')
}
// حل اخر ما بعرف الصح اياه اللي فوق واللي تحت
let num7 = 10;
let num8 = 30;
let num9 = "30";
if ((num9 > num7 && num9 !== num8) && (num9 > num7 && num9 == num8 && num9 !== num8) && (num9 !== num7 && num9 !== num8)){
    console.log('"30 Is Larger Than 10 And Type string Not The Same Type As number"' +
    "\n" + '"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"' +
    "\n" +'"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"')
}

// Edit What You Want Here

let num01 = 11;
let num02 = 10;
let num03 = 11;
let num04 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num01 > num02) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num01 > num02 && num01 < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num01 > num02 && num01 === num03) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num01 + num02) < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num01 + num03) < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num01 + num02 + num03) < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num04 - (num01 + num03) + num02 === 21) {
  console.log("True");
} else {
  console.log("False");
}