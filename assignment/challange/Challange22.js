/*
Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


/*
  [++a]
  [++a]
  - Value:11
  - Explain:pre-Increment 
  [+]
  - Explain:add operator 
   [+b++]
  - Value: 21 after print when print 20 becaust its post
  - Explain:post-Increment &  + Unary Plus return a positive number
    [+]
  - Explain:add operator  
  [+c++]
  - Value: 81 after print when print 80 becaust its post
  - Explain:post-Increment &  + Unary Plus return a positive number
  [-]
  - Explain:minus operator 
     [+a++]
  - Value: 12 after print when print 11 becaust its post
  - Explain:post-Increment &  + Unary Plus return a positive number
  */

 /*
     [++a]
  - Value: 13
  - Explain:pre-Increment
    [+]
  - Explain:add operator 
   [-b]
  - Value: -21 
  - Explain: - Unary Negation [Return Number If Its Not Number + Negates It]
      [+]
  - Explain:add operator  
  [+c++]
  - Value: 82 after print when print 81 becaust its post
  - Explain:post-Increment &  + Unary Plus return a positive number
    [-]
  - Explain:minus operator 
       [-a++]
  - Value: -14 after print when print -13 becaust its post
  - Explain:post-Increment &  +Unary Negation [Return Number If Its Not Number + Negates It]
    [+]
  - Explain:add operator 
       [+a]
  - Value: 14
  - Explain:+ Unary Plus return a positive number

*/

/*
 [--c]
  - Value: 81
  - Explain:pre-decrement
   [+]
  - Explain:add operator
     [+b]
  - Value: 21 
  - Explain:  Unary plus [Return positive Number If Its Not Number] 
   [+]
  - Explain:add operator
  [--a]
   - Value: 13
  - Explain:pre-decrement
[*]
 - Explain: Multiplication operator
 [+b++]
  - Value: 22 after print when print 21 becaust its post
  - Explain:post-Increment &  + Unary Plus return a positive number
     [-]
  - Explain:minus operator 
   [+b]
  - Value: 22
  - Explain:  Unary plus [Return positive Number If Its Not Number] 
[*]
 - Explain: Multiplication operator
 [a]
     - Value: 13
   [+]
  - Explain:add operator
  [--a]
     - Value: 12
  - Explain:pre-decrement
     [+]
  - Explain:add operator
  [true]
  -value:1 
 - Explain: bollen with Unary plus [Return positive Number If Its Not Number] 

  */



/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + ++f +  ++e * ++g ); // 173