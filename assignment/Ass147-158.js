// ==========================> # -1
class Car{
    constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
}
run(){
console.log("Car Is Running Now ");
}
stop(){
return "Car Is  stoped "
}

}
  
let carOne = new Car ("Toyota", 2022 , "9000 JD");
let carTwo = new Car ("MG", 2021 , "8000 JD");
let carThree = new Car ("BMW", 2023 , "10000 JD");
console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.n} And Price Is ${parseInt(carOne.p)}`)
carOne.run();
console.log(carOne.stop());
// Needed Output
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"
console.log("#".repeat(30));

// ==========================> # -2

class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  }
class Tablet extends Phone {
    constructor(name, serial, price,size ="Unknown") {
    super(name,serial,price);
    this.s=size ||"Unknown" ;
    }
    // "Unknown" بتزبط بالطريقتين فوق 
    fullDetails(){
        
        return `${this.name} Serial is ${this.serial} And Size Is ${this.s} `;
    }
}


let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

console.log("#".repeat(30));
// ==========================> # -3
// Edit The Class
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
    }
    get showData(){
        let cardNumber =((this.#c).toString()).match(/\d{1,4}/ig);
        return  `Hello ${ this.u} Your Credit Card Number Is ${cardNumber.join("-")}`

    }
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined



console.log("#".repeat(30));
// ==========================> # -4
// Write Your Code Here

let myStr = "Elzero";
String.prototype.addLove = function(){
    return" I Love Elzero Web School";
}
console.log(myStr.addLove()); // I Love Elzero Web School

console.log("#".repeat(30));
// ==========================> # -5

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
  Object.defineProperties(myObj,{
    id:{
        enumerable:false ,
    },
    score:{
    writable:false,
    },
    country:{
        enumerable:false,
    },
  })
  
  myObj.score = 500;
  delete myObj.country;
console.log(delete myObj.country);
  
  for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
  }
  
  console.log(myObj);
  
  // Needed Output
  
//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}


