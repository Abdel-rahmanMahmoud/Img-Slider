
let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
let iterator =setOfNumbers.values();
iterator.next();
iterator.next();
console.log(iterator.next().value);
// or
console.log(Array.from(setOfNumbers)[2]);


// Needed Output
// Set(3) {10, 20, 2}
// 2
console.log("=".repeat(40));

//  ######----2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let sortingArray = Array.from(new Set(myFriends)).sort()
console.log(sortingArray);
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log("=".repeat(40));


//  ######----3
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap_Info = new Map([ ["username" , "Osama"],["role", "Admin"],["country", "Egypt"]]);

console.log(myMap_Info);
console.log(myMap_Info.get("username"));
console.log(myMap_Info.size);
console.log(myMap_Info.has("role"));


  // Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true
console.log("=".repeat(40));

//  ######----4


let theNumber = 100020003000;
console.log( ...[...new Set([...theNumber.toString()])].filter(function (el){ return el > 0;}));
// console.log(new Set ([...theNumber]))

// Needed Output
// 123
console.log("=".repeat(40));

//  ######----5

let theName = "Elzero";
console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(Object.assign([], theName));

let myArray =[];
    for (let i= 0 ; i < theName.length ; i++) {
        myArray.push(theName[i]);
    }

console.log(myArray);

let myArray2 =[];
    for (let i= 0 ; i < theName.length ; i++) {
        myArray2.unshift(theName[i]);
    }

console.log(myArray2.reverse());

// let myArray3 =[];
//     for (let i= theName.length - 1 ; 0 <= i < theName.length  ; i--) {
//         myArray3.unshift(theName[i]);
//     }

// console.log(myArray3);


// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
console.log("=".repeat(40));

//  ######----6
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let charsNum = chars.filter(function (el) {
return !isNaN(el);
});

let charsStr= chars.filter(function (el) {
return isNaN(el);
});

let charsAll =[...charsNum , ...charsStr];
//      --------->    Or
// let charsAll =charsNum.concat(charsStr);

console.log(charsAll.copyWithin(0, charsNum.length , charsNum.length * 2 ));

console.log("=".repeat(40));

//  ######----7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let newNums = numsOne.slice(0,numsOne.length);
// عملتها سلايس عشان ما تتاثر الاريه الاصلية 
newNums.push(...numsTwo);

let numsAll = numsOne.concat(numsTwo);
let numsAll2 = [...numsOne ,...numsTwo];

console.log(numsAll);
console.log(numsAll2);
console.log(newNums);

// Needed Output
// [1, 2, 3, 4, 5, 6]

//  ######----8

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1,...n2].length * Math.max(...n2));

// Needed Output
// 210