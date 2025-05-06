let header = document.createElement("div");
header.clchallangeName="header";

let logo =document.createElement("div");
logo.clchallangeName="logo";
logo.innerHTML="ELZERO"

let ul = document.createElement("ul");
ul.clchallangeName="menu";
let li;
var liContent =['Home' ,'About' ,'Service', 'Contact']
for(let i=0 ; i < 4 ;i++){
li = document.createElement("li");
li.clchallangeName="li";
li.innerHTML=liContent[i];
ul.append(li);
console.log(li);
ul.style.cssText="list-style: none ; display:flex;"
li.style.cssText=" padding:5px; "
}
header.append(logo);
header.append(ul);
logo.style.cssText="color:#24ab6d; font-weight: 900;font-size: large;font-family: sans-serif;";
header.style.cssText="padding :10px; display: flex;   align-items: center;height:10vh;justify-content:space-between; background-color:#ffffff;color:#a8acb4;"
document.body.style.margin=0;
document.body.style.backgroundColor="#ebebeb";
document.body.append(header);
// =========================?======================
let section = document.createElement("div");
section.clchallangeName="section";
let sectionDiv;
let span;
for(let j =1 ;j<=15;j++){
sectionDiv = document.createElement("div");
sectionDiv.innerHTML=`<span>${j}</span> product`;
section.append(sectionDiv);
sectionDiv.style.cssText="background-color:#fff;  align-items: center; justify-content: center;display: flex; flex-flow: column;";
}
document.body.append(section);
section.style.cssText="padding: 10px;display: grid;grid-template-columns: repeat(3,1fr);gap: 10px;height: 70vh;";
span = document.querySelectorAll("span");
for(let j =0 ;j<15;j++){
span[j].style.cssText=" display:block; font-size: larger;    font-weight: bold;";
}
// =========================?======================
let footer=document.createElement("div");
footer.clchallangeName="footer";
document.body.append(footer);
footer.append("CopyRight @ 2023");
footer.style.cssText="background-color:#24ab6d;color:white; height: 13.25vh; font-weight: 900;font-size: large;font-family: sans-serif; display: flex;justify-content: space-around;align-items: center;"
