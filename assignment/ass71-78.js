let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newArray = mix.map(function (element) {return typeof element === "string" ? element : ""}).reduce(function (acc, current){
    return acc + current;
  });
console.log(newArray);
// Elzero
console.log('='.repeat(40));

let myString = "EElllzzzzzzzeroo";
let newArray2 = myString.split("").filter((letter ,Index ,array) => myString.indexOf(letter) === Index).reduce((acc,current)=> `${acc}${current}`);
// Elzero
console.log(newArray2);

console.log('='.repeat(40));



let myArray = ["E", "l", "z", ["e", "r"], "o"];

// استخدام reduce لتسطيح المصفوفة
let flattenedArray = myArray.reduce((accumulator, currentValue) => {
  // إذا كان القيمة الحالية هي مصفوفة، فقم بدمج عناصرها مع المصفوفة المتراكمة

  // إذا كانت القيمة الحالية ليست مصفوفة، فقم بإضافتها إلى المصفوفة المتراكمة
  return accumulator.concat(currentValue);
}).split(",").reduce(function (acc , current){return acc + current});
console.log(flattenedArray);

console.log('='.repeat(40));

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newNumsAndStrings =numsAndStrings.map((ele) => {return isNaN(ele) ? ele : -ele}).filter(function( ele){return !isNaN(ele)})
console.log(newNumsAndStrings)
// [-1, -10, 10, 20, -5, -3]

console.log('='.repeat(40));


let nums = [2, 12, 11, 5, 10, 1, 99];
let numOp =nums.reduce(function(acc , current) {return current % 2 ==0 ? acc * current : acc + current },1)
console.log(numOp)
// 500
