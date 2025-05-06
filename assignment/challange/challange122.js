/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if(chosen === 1){
const [{title , age , available , skills:[ ,lastskill]}    , ,] =myFriends;
console.log(`${title} 
${age}
${available === true ? "available" : "notavailable"} 
${lastskill}`);
}
else if(chosen === 2){
const [ , {title , age , available , skills:[,lastskill]} , ] =myFriends;
console.log(`${title} 
${age}
${available === true ? "available" : "notavailable"} 
${lastskill}`);
}
else if(chosen === 3){
const [, ,{title , age , available , skills:[,lastskill]}] =myFriends;
console.log(`${title} 
${age}
${available === true ? "available" : "notavailable"} 
${lastskill}`);
}
