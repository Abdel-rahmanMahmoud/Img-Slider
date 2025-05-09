// Create Your Object Here


// My Name Is Elzero, My Age Is 38, I Live in Egypt
let member ={
    name : "Elzero",
    age : 38,
    country :"Egypt",
    fullDetails : function (){
        return `My Name Is ${member.name} , My Age Is ${member.age}, I Live in ${member.country}`
    }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
console.log("=".repeat(45))

// Method One
let objMethodOne ={ 
    property : "property #1"
}

console.log(objMethodOne.property); // "Method One"

// Method Two

let objMethodTwo = new Object ({
property : "property #2", 
})
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree =Object.create({
    property : "property #3", 
    })
console.log(objMethodThree.property); // "Method Three"

// // Method Four
let objMethodFour =Object.assign( {},{},{
    property : "property #4", 
    })
console.log(objMethodFour.property); // "Method Four"7

let objMethodFour2 =Object.assign( objMethodFour,{},{
    property2 : "property #4-2"})
console.log(objMethodFour2); // "Method Four"7

console.log("=".repeat(45))

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};


let finalObject = Object.assign({},{a:1},threeNums , twoNums)
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
console.log("=".repeat(45))
console.log("=".repeat(45))
console.log("=".repeat(45))



console.log("=".repeat(45))


// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
    // console.log(Object.keys(myFavGames).length);
    // console.log(Object.keys(myFavGames)[i]);
  
//   // Code One => How To Get Object Length ?
  let objectLength = Object.keys(myFavGames).length;
  
  for (let i = 0; i < objectLength; i++) {
    
    console.log(`The Game Name Ismy ${Object.keys(myFavGames)[i]}`);
    console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
    console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);
   
//     // Check If Nested Object Has Property (bestThree)
    if (myFavGames[Object.keys(myFavGames)[i]].bestThree !== undefined) {
      console.log("- Game Has Releases");
      console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
      console.log(`Second =>  ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
      console.log(`Third =>  ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
    }
    // طريقة اخرى
    if (Object.hasOwn(myFavGames[Object.keys(myFavGames)[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second =>  ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third =>  ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
    }
    console.log("#".repeat(20));
}

