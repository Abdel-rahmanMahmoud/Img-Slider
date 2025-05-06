let fileName = "Elzero.php";
console.log(fileName.split(".")[0]);
console.log(fileName.split(".")[1]);
// Elzero
// php

console.log("#########");
// =================================== =>2

function addEl(str) {
  if (str == "") {
    return str;
  } else if (str.startsWith("El")) {
    return str;
  } else {
    return "El" + str;
  }
}
console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero

console.log("##########");
// =================================== =>3

let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
console.log(
  myString.slice(0, myString.indexOf("@", myString.indexOf("@") + 1))
);

let result = myString.replace(/g@ .*/, "g");
console.log(result);

let myString1 = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";

// تقسيم النص بناءً على النمط " @ " ثم استخدام الدالة join() لدمج الأجزاء المطلوبة
let result1 = myString1.split("@ @");

console.log(result1[0]);

// Output Needed
// "Hello Elzero Web School @ We Love Programming"

console.log("#######");
// =================================== =>4

function checkRange(n1, n2, n3, n4, n5) {
  if (n4 <= n1 && n1 <= n5 && n4 <= n2 && n2 <= n5 && n4 <= n3 && n3 <= n5) {
    return "Yes All Numbers In Range";
  } else {
    return "Not All Numbers Is In Range";
  }
}

console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

console.log("#######");
// =================================== =>5

function replaceFirstWithLast(word) {
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}
console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oellH

console.log("#######");
// =================================== =>6

function checkBiggestNum(word) {
  // Your Line Of Code Here
  let num = word.split("");
  let num2 = num.reduce(function (a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  });
  return num2;
}

console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9

console.log("#######");
// =================================== =>7

let nums = [20, 100, 50, 10, 15, -20, 30];
console.log(
  nums
    .sort((a, b) => {
      return b - a;
    })
    .slice(0, 2)
);
// Needed Output
// [100, 50]

console.log("#######");
// =================================== =>8

let nums1 = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;
nums1.push(goal);
nums1.sort((a, b) => {
  return a - b;
});
console.log(nums1[nums1.indexOf(100) - 1]);

// Closest Number Is 88

console.log("#######");
// =================================== =>9

function swapEveryTwoChars(word) {
  //   word = word.split("");
  for (let i = 0; i < word.length; i++) {
    if (i % 2 != 1) {
      if (word[i] == word[i].toLowerCase()) {
        word = word.replace(word[i], word[i].toUpperCase());
      } else {
        word = word.replace(word[i], word[i].toLowerCase());
      }
    }
  }
  return word;
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello
console.log(swapEveryTwoChars("weLcOmE")); // Welcome

console.log("#######");
// =================================== =>10

// Write Your Function Implementation Here

function elzeroRepeat(params) {
  let Rep = "";
  for (let i = 0; i < params; i++) {
    Rep += `${this} `;
  }
  return Rep;
}
String.prototype.elzeroRepeat = elzeroRepeat;
console.log("Hello".elzeroRepeat(3)); // Elzero Elzero Elzero

console.log("#######");
// =================================== =>11

let myMoney = 5301503206;
let formattedMoney = myMoney
  .toString()
  .split("")
  .reverse()
  .reduce((acc, num, index) => {
    return (
      (index % 3 === 2 && index !== myMoney.toString().length - 1 ? "," : "") +
      num +
      acc
    );
  }, "");

console.log(formattedMoney); // Output: "5,301,503,206"

let myMoney1 = 5301503206;

// تحويل العدد إلى نص مع فواصل بين الآلاف
let formattedMoney1 = myMoney.toLocaleString();

console.log(formattedMoney1); // Output: "5,301,503,206"

// // Needed Output
// // 5,301,503,206

console.log("#######");
// =================================== =>12

let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result2 = [];
for (let index = 0; index < names.length; index++) {
  if (
    names[index][0].toLowerCase() ===
    names[index][names[index].length - 1].toLowerCase()
  ) {
    result2.push(names[index]);
  }
}
console.log(result2); // ['Osso', 'Aola', 'Daad', 'Roor']

console.log("#######");
// =================================== =>13
let theName = "Elzero";
console.log(theName[0] + theName.split("").reverse().join("")[0]);
console.log(theName[0] + theName[theName.length - 1]);
console.log(theName.slice(1, -1));
console.log(theName[theName.length / 2 - 1] + theName[theName.length / 2]);

// Line 1 => Eo
// Line 2 => lzer
// Line 3 => ze

console.log("#######");
// =================================== =>14

function repeatWithRules(word) {
  let wordArray = word.split("");
  let letterRepeted = [];
  for (let index = 0; index < word.length; index++) {
    let char = wordArray[index].repeat(index + 1);
    letterRepeted.push(char);
  }
  return letterRepeted.join("");
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo

console.log("#######");
// =================================== =>15
function concatenateWithoutLast(words) {
  const element = [];
  for (let index = 0; index < words.length; index++) {
    element.push(words[index].slice(0, words[index].length - 1));
  }
  return element.join(" ");
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

console.log("#######");
// =================================== =>16

function getCharacters(word, nums) {
  let firstTwo = word.slice(0, nums);
  let secondTwo = word.slice(-nums);

  return firstTwo + secondTwo;
}

console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool

console.log("#######");
// =================================== =>17

function formatName(theName) {
  theName = theName.split(" ");
  const element = [];
  for (let index = 0; index < theName.length; index++) {
    element.push(theName[index][0].toLowerCase());
  }
  element[0] = element[0].toUpperCase();
  return element.join(".");
  console.log(theName);
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s

console.log("#######");
// =================================== =>18

let st = "elzero";
st[0] = st[0].toUpperCase();

console.log(st[0].toUpperCase() + st.slice(1));
console.log(st.charAt(0).toUpperCase() + st.substring(1));

console.log("#######");
// =================================== =>19

let st1 = "Web SchoolElzero ";
let newSt =
  st1.slice(-7) + " " + st1.slice(-st1.length, -14) + " " + st1.slice(-13, -7);
console.log(newSt);

// Needed Output
("Elzero Web School");

console.log("#######");
// =================================== =>20
let st2 = "Elzero";
console.log(st2[st2.length - 1]);
console.log(st2.charAt(st2.length - 1));
console.log(st2[st2.indexOf("o")]);
console.log(st2[st2.lastIndexOf("o")]);
console.log(st2.split("").reverse()[0]);
console.log(st2.split("")[st2.length - 1]);
console.log(st2.slice(st2.length - 1));
console.log(st2.substring(st2.length - 1));

// Needed Output
("o");
("o");
("o");
("o");
("o");
("o");
("o");

console.log("#######");
// =================================== =>21

function getLastDigit(num) {
  //   let myNumbers = [...num.toString()];
  //   let lastDigit = +myNumbers.reverse()[0];
  //   return lastDigit;
  return num % 10;
}

console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // Number

console.log("#######");
// =================================== =>22

let str1 = "AElzero";
let str2 = "ZAcademy";

console.log(str1.slice(1) + " " + str2.slice(1)); // Elzero Academy

console.log("#######");
// =================================== =>23

function reversing(str) {
  let reversed = "";
  let symbols = "";

  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z0-9]/.test(str[i])) {
      reversed = str[i] + reversed;
    } else {
      symbols += str[i];
    }
  }

  return symbols + reversed;
}

console.log(reversing(",@Hello, E@lzero")); // النتيجة الصحيحة: ,@olleH, E@orezl

console.log("#######");
// =================================== =>24

function dashBetweenOdd(num) {
  let numArr = num.toString().split("");
  let newArray = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i - 1] % 2 == 1 && numArr[i] % 2 == 1) {
      newArray.push("-");
    }
    newArray.push(numArr[i]);
  }
  return newArray.join("");
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922

console.log("#######");
// =================================== =>25

let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
while (myArr.length > 0) {
  myArr.pop();
}

myArr = myArr.slice(0, 0);
myArr.splice(0);
myArr.length = 0;
console.log(myArr);

console.log("#######");
// =================================== =>26
let myArr2 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// let mynewArray = new Set(myArr2);
// console.log([...mynewArray]);

// let mynewArray2 = [];
// for (let index = 0; index < myArr2.length; index++) {
//   if (!mynewArray2.includes(myArr2[index])) {
//     mynewArray2.push(myArr2[index]);
//   }
// }
// console.log(mynewArray2);
let myArr3 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
let uniqueArr = myArr3.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    // console.log(acc);
    acc.push(curr);
  }
  //   console.log(acc);
  return acc;
}, []);
console.log(uniqueArr); // [10, 20, 30, 50]

// Output Needed
// [10, 20, 30, 50]

console.log("#######");
// =================================== =>27

let myArra = ["69", "108", "122", "101", "114", "111"];
let res = myArra.map((el) => {
  return String.fromCharCode(Number(el));
});
console.log(res.join("")); // Elzero

console.log("#######");
// =================================== =>28

// Write Your Function Here

function customMerge(...arrays) {
  let i = [];
  for (let index = 0; index < arrays.length; index++) {
    i.push(...arrays[index]);
    console.log(arrays[index]);
  }
  let num = i.map((el) => +el).sort((a, b) => a - b);
  return num;
}
console.log(
  customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10])
);

// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]

console.log("#######");
// =================================== =>29
function customCalc(...nums) {
  for (let index = 0; index < nums.length; index++) {
    nums = nums.filter((el) => {
      return +el;
    });
    nums = nums.reduce(function (a, b) {
      return a + b; // Add return statement here
    });
    // console.log(nums[index]);
  }
  return nums;
}
function customCalc(...params) {
  // Filter out numbers only
  const numbers = params.filter(
    (param) => typeof +param === "number" && !isNaN(param)
  );
  // console.log(numbers);

  // Calculate the sum of numbers
  const sum = numbers.reduce((acc, curr) => +acc + +curr, 0);
  // console.log( sum);
  // Multiply the sum by the first and last elements
  const result = sum * params[0] * params[params.length - 1];

  return result;
}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10

console.log("#######");
// =================================== =>30

for (let i = 1; i < 100; i += 5) {
  if (i % 10 == 1) {
    console.log(i);
  }
}

console.log("#######");
// =================================== =>31

let myArray = [100, 200, 300, 400];

// Method 1
let clonedArray = [...myArray];
let clonedArray2 = [];
let clonedArray3 = [];
let clonedArray4 = [];
myArray.forEach((item) => clonedArray4.push(item));
let clonedArray5 = Array.from(myArray);
let clonedArray6 = [].concat(myArray);
let clonedArray7 = myArray.slice();
let clonedArray8 = myArray.map((item) => item);
let clonedArray9 = [];
for (let i = 0; i < myArray.length; i++) {
  clonedArray9.push(myArray[i]);
}

clonedArray2 = clonedArray2 + myArray;
clonedArray3.splice(0, 0, ...myArray);
console.log(clonedArray2.split(",")); // [100, 200, 300, 400]
console.log(clonedArray3); // [100, 200, 300, 400]
console.log(clonedArray4); // [100, 200, 300, 400]
console.log(clonedArray5); // [100, 200, 300, 400]
console.log(clonedArray6); // [100, 200, 300, 400]
console.log(clonedArray7); // [100, 200, 300, 400]
console.log(clonedArray8); // [100, 200, 300, 400]
console.log(clonedArray9); // [100, 200, 300, 400]

console.log("#######");
// =================================== =>32

let strNumber = "10";

// Method 1
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10 <= Same Solution
console.log(+strNumber); // 10 <= Same Solution
console.log(Number(strNumber)); // 10 <= Same Solution
console.log(parseInt(strNumber)); // 10 <= Same Solution
console.log(parseFloat(strNumber)); // 10 <= Same Solution
console.log(Math.floor(strNumber));

console.log("#######");
// =================================== =>33

console.log(
  "%c ELZERO WEB SCHOOLL ",
  "color: white; background-color: blue; line-Height:50px"
);

console.log("#######");
// =================================== =>34

let arr = [1, 1, 1, 2, 3, 4, 3];
let uniqueElements0 = [...new Set(arr)];
let uniqueElements = [];
let uniqueElements1 = [];
let uniqueElements2 = [];

for (let index = 0; index < arr.length; index++) {
  if (!uniqueElements.includes(arr[index])) {
    uniqueElements.push(arr[index]);
  }
}
uniqueElements1 = arr.filter((value, index) => arr.indexOf(value) === index);

arr.forEach((value) => {
  if (!uniqueElements2.includes(value)) {
    uniqueElements2.push(value);
  }
});

console.log(uniqueElements); // [1, 2, 3, 4]
console.log(uniqueElements0); // [1, 2, 3, 4]
console.log(uniqueElements1); // [1, 2, 3, 4]
console.log(uniqueElements2); // [1, 2, 3, 4]

console.log("#######");
// =================================== =>35

function generateSerial(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let serial = generateSerial(20);

console.log(serial); // يتغير مع كل تحديث للصفحة

console.log("#######");
// =================================== =>36

// Using a for loop
let smallLetters = "";
for (let i = 97; i <= 122; i++) {
  smallLetters += String.fromCharCode(i);
}
console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz

console.log("#######");
// =================================== =>37
let numOne = 100;
let numTwo = 200;

if (numOne > numTwo) {
  console.log("1st > 2nd");
} else if (numOne < numTwo) {
  console.log("1st < 2nd");
} else {
  console.log("1st = 2nd");
}
numOne > numTwo
  ? console.log("1st > 2nd")
  : numOne < numTwo
  ? console.log("1st < 2nd")
  : console.log("1st = 2nd");

// 1st < 2nd

// Write Your Ternary Operator Code Here

console.log("#######");
// =================================== =>38

let str = "i lovE ElzeRO weB schOOL";
str = str
  .split(" ")
  .map((el) => {
    return el[0].toUpperCase() + el.slice(1).toLowerCase();
  })
  .join(" ");

console.log(str);
// Output Needed: ['i', 'love', 'elzero', 'web', 'school']

// Output Needed

console.log("#######");
// =================================== =>39

let myData0 = ["Osama", "Mohamed", "Elsayed", "Elzero"];

Object.freeze(myData0);
// myData0.push("Name");
console.log(myData0); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']

console.log("#######");
// =================================== =>40

const myData = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

Object.freeze(myData); // Prevents modifications to myData

myData.skill = "Programming"; // This will not add a new property

console.log(myData.user); // Elzero
console.log(myData.age); // 41
console.log(myData.country); // Egypt
console.log(myData.skill); // Undefined

console.log("#######");
// =================================== =>41

const myObjData = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

let cloned = new Object(myObjData);
let cloned2 = { ...myObjData };
const cloned3 = Object.assign({}, cloned);
const cloned4 = {};
for (let key in myData) {
  cloned[key] = myData[key];
}

console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned2); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned3); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned4); // {user: 'Elzero', age: 41, country: 'Egypt'}

console.log("#######");
// =================================== =>42

let ctrlPressed = false;
let altPressed = false;
let shiftPressed = false;
let div = document.createElement("div");
document.body.append(div);
document.addEventListener("keydown", (event) => {
  div.innerHTML = "";

  if (event.ctrlKey) {
    ctrlPressed = true;
  } else if (event.altKey) {
    altPressed = true;
  } else if (event.shiftKey) {
    shiftPressed = true;
  }

  if (ctrlPressed && altPressed && shiftPressed) {
    console.log("You Pressed Ctrl + Alt + Shift");
    // تحقق من طباعة الرسالة مرة واحدة فقط
    div.innerHTML = "You Pressed Ctrl + Alt + Shift";
    ctrlPressed = false;
    altPressed = false;
    shiftPressed = false;
  }
});

console.log("#######");
// =================================== =>43
let tbody = document.querySelector(".result tbody");
// console.log(tbody)
fetch("https://api.github.com/users/ElzeroWebSchool/repos")
  .then((response) => {
    let repo = response.json(response);
    // console.log(repo);
    return repo;
  })
  .then((repos) => {
    repos.length = 15;
    // console.log(repos);
    repos.forEach((el) => {
      let row = document.createElement("tr");
      tbody.append(row);

      let Name = document.createElement("td");
      Name.innerHTML = el.name;

      let stars = document.createElement("td");
      stars.innerHTML = el.stargazers_count;

      let link = document.createElement("td");

      let a = document.createElement("a");
      a.href = el.url;
      a.target = "_blank";
      a.textContent = "visit";

      row.append(Name, stars, link);
      link.append(a);
    });
  });

console.log("#######");
// =================================== =>44

let last = 30;
let sum = [];
let sum1 = 0;
for (let index = --last; index > 0; index -= 4) {
  console.log(index);
  sum.push(index);
  sum1 += index;
}
sum = sum.reduce((a, b) => {
  return a + b;
});
console.log(sum);
console.log(sum1);

// First Request Output Needed
// 29;
// 25;
// 21;
// 17;
// 13;
// 9;
// 5;
// 1;

// // Second Request Output Needed
// 120;

console.log("#######");
// =================================== =>45

let rangeEnd = 10;
let myRange = [];
for (let index = 1; index <= rangeEnd; index++) {
  myRange.push(index);
}
// Output Needed
console.log(myRange); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("#######");
// =================================== =>46

let nums0 = [10, -20, 300, 50, 100, -50];
// nums0.sort((a, b) => {
//   return a - b;
// });

// console.log(nums0[nums0.length - 1]);
// nums0 = nums0.reduce((a, b) => {
//   return a > b ? a : b;
// });

// let maxNumber = nums[0];

// for (let num of nums) {
//   if (num > maxNumber) {
//     maxNumber = num;
//   }
// }

console.log(nums0);
let nums2 = [10, -20, 300, 50, 100, -50];
let maxNumber = Math.max(...nums2);

console.log(maxNumber); // 300

console.log("#######");
// =================================== =>47

document.querySelector("button").addEventListener("click", function () {
  let textContent = document.querySelector("textarea").value;
  let blob = new Blob([textContent], { type: "text/plain" });
  let anchor = document.createElement("a");
  // document.body.append(anchor);
  anchor.download = "text.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.innerHTML = "here";
  anchor.click();
});

console.log("#######");
// =================================== =>48
function createStars0(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += "*".repeat(i * 2 - 1) + "\n";
  }
  return result;
}

console.log(createStars0(8));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************
console.log("#######");
// =================================== =>49

function createStars(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += "*".repeat(i * 2 - 1) + "\n";
  }
  for (let i = num - 1; i > 0; i--) {
    result += "*".repeat(i * 2 - 1) + "\n";
  }
  return result;
}

console.log(createStars(3));

// Output Needed
// *
// ***
// *****
// ***
// *

console.log(createStars(7));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *
console.log("#######");
// =================================== =>50

function createStars1(num) {
  let result = "";
  let s = 1;
  for (let index = num; index > 0; index--) {
    result += "*".repeat(index * 2 - 1) + "\n" + " ".repeat(s);
    s++;
  }
  result = result.trim() + "\n";
  for (let index = 1; index <= num; index++) {
    result += " ".repeat(num - index) + "*".repeat(index * 2 - 1) + " \n";
    // s++;
  }
  return result;
}

console.log(createStars1(6));

// Output Needed
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// ====================== Extra

function createStars2(num) {
  let result = "";
  for (let i = 1; i <= num * 2 - 1; i++) {
    let spaces = Math.abs(num - i);
    let stars = num * 2 - 1 - spaces * 2;
    result += " ".repeat(spaces) + "*".repeat(stars) + "\n";
  }
  return result;
}

console.log(createStars2(6));

//   =======>  The   -  End  <=======
