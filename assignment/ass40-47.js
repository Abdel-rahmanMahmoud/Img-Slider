let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(-(++num),--num)); // ["Ahmed", "Elham", "Osama"];
// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

let arrOne = [ "C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [arrTwo[arrTwo.indexOf("Z")] ,arrOne[arrOne.indexOf("X")] ,arrOne[arrOne.indexOf("D")],arrOne[arrOne.indexOf("C")],arrTwo[arrTwo.indexOf("B")],arrTwo[arrTwo.indexOf("A")]];
// جل اخر
let finalArr3 = arrOne.concat(arrTwo).sort().reverse();
// حل اخر

let finalArr2 = [arrTwo.pop()].concat( arrOne.reverse() , arrTwo.reverse() );

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
console.log(finalArr2); // ["Z", "X", "D", "C", "B", "A"]
console.log(finalArr3); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
console.log(words.pop()[0].slice(website.length).toUpperCase()); // ZERO
// 
let needle = "JS";
let haystack = ["PHP","JS", "Python"];


// Write 3 Solutions
if (haystack.includes(needle))
{
    console.log("Found");
}
if (haystack.indexOf(needle)>=0)
{
    console.log("Found");
}
if (haystack.lastIndexOf(needle)>=0)
{
    console.log("Found");
}
if (haystack.lastIndexOf(needle))
{
    console.log("Found");
}
if (haystack.indexOf(needle))
{
    console.log("Found");
}



// 
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [arr2[arr2.indexOf("F")].toLowerCase(),arr1[arr1.indexOf("X")].toLowerCase(),arr2[arr2.indexOf("Y")].toLowerCase()];
// Your Code Here

console.log(allArrs.join("")); // fxy
// حل اخر

let allArrs2 = arr1.concat(arr2).sort().join("").slice(arr1.indexOf("C") + arr2.indexOf("Y")).toLowerCase();
let allArrs3 = arr1.concat(arr2).sort().join("").slice(arr2.length).toLowerCase();

console.log(allArrs2); // fxy
console.log(allArrs3); // fxy