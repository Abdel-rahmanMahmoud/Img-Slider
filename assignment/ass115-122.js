let myNumbers = [1, 2, 3, 4, 5];
const [a0, , , ,e0] = myNumbers;
// Write Your Destructuring Assignment Here

console.log(a0 * e0); // 5


// ========================================================
// ** #-----2

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

var [a , b , c , [d, e , [f , g] ] ] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


// ========================================================
// ** #-----3


let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

let [, a1, b1, c1, ,] = arr3.concat(arr1);

console.log(`My Best Friends: ${a1}, ${b1}, ${c1}`);

// My Best Friends: Shady, Mahmoud, Ahmed

// ========================================================
// ** #-----4

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

const { age:a2 ,working:w ,country:c2, hobbies:[h1 , ,h3] } =member;


console.log(`My Age Is ${a2} And Iam ${w === true ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working

console.log(`I Live in ${c2}`);
  // I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming

  // ========================================================
// ** #-----5

const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
Origin: "30 USD",
    },
};

// const{title:t, developer:de  } = game;

// const [oa , ar] = Object.keys(game.releases);

// const [[u,j],{US: u_price,JAP:j_price },or] = Object.values(game.releases);

//                                   OR

const{title:t, developer:de ,releases } = game;

const [oa , ar] = Object.keys(releases);

const [[u,j],{US: u_price,JAP:j_price },or] = Object.values(releases);

console.log("above");

  // Write Your Destructuring Assignment/s Here

console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style
  
  console.log(`And I Love ${de} Games`);
  // And I Love Falcom Games
  
  console.log(`My Best Release Is ${oa} It Released in ${u} & ${j}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan
  
  console.log(`Although I Love ${ar}`);
  // Although I Love Ark Of Napishtim
  
  console.log(`${ar} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD
  
  console.log(`${ar} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD
  
  console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD