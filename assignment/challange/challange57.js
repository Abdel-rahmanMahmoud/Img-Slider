/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Dara","Morad","Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar","Dmara", "Dora", "Othman", "Amany", "Samia", "Anwar" ,"Malek" , "Motaz" ];

document.write(`<div><b>We Have ${myAdmins.length - 2} Admins<b></div>`);
document.write(`<hr>`);

for(let i=0 ; i < myAdmins.length -2 ; i++) {
document.write(`<div>`);
document.write(`The Admin for Team ${i + 1} Is <span style="color :#ff2323; font-size:larger;">- ${ myAdmins[i]} - </span>`);
document.write(`<h3>Team Members</h3>`);
let h =1 ;
for ( let j=0 ; j < myEmployees.length ; ++j ) {
   if ( myAdmins[i][0] == myEmployees[j][0] ) {
    document.write(`<p>- ${h++} ${myEmployees[j]} </p>`);
}
console.log(`${j}`);

}
document.write(`</div>`);
document.write(`<hr>`);

}
