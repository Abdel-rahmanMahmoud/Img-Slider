console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element"));
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByName("js"));
console.log(document.querySelector("div"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector("[name='js']"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll(".element"));
console.log(document.querySelectorAll("#elzero"));
console.log(document.querySelectorAll("[name='js']"));
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.firstChild);
console.log(document.body.childNodes[0]  );

// for(let i=0 ; i < document.images.length ;i++){
// let imgs =(document.querySelectorAll("img"));
// imgs[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
// imgs[i].alt="Elzero Logo";
// console.log(imgs[i]);
// }
console.log("==================");

//=============================




// احصل على العنصر
var dollarInput = document.getElementById("dollarInput");
var output = document.getElementById("result");
var output = document.querySelector(".result");
// ألكلاس نيم سليكتور عملتلي مشاكل ما بعرف ليش

// document.forms[0].addEventListener("input", function() {
// بتقدر تبدا باللي فوق او اللي تحدث عشان تبدا تستخدم الحدث
dollarInput.addEventListener("input", function() {

    // عرض النتيجة في العنصر div المخصص للعرض
    output.textContent= `{ ${dollarInput.value} }   USD Dollar =   { ${(dollarInput.value * 0.71).toFixed(2)} }  Jordanian Dinar`;
});

// dollarInput.oninput=function() {} او هيك
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// |||||||||||||||||||||||||||||||||

console.log("==================");

document.querySelector(".one").innerHTML = document.querySelector(".one").className;
document.querySelector(".one").title=document.querySelector(".one").className;
let divAttr1= document.querySelector(".one").title;


document.querySelector(".two").title=document.querySelector(".two").className ;
document.querySelector(".two").innerHTML=document.querySelector(".two").className + document.querySelector(".two").attributes.length;
let divAttr2= document.querySelector(".two").title;

console.log("==================");
document.querySelectorAll("#img");
// console.log((document.querySelectorAll("#img")[1]).hasAttribute("alt"));
let a =document.querySelectorAll("#img").length;
for(let i=0 ; i < a ; i++ ){
if (( document.querySelectorAll("#img")[i]).hasAttribute("alt")) {
    ( document.querySelectorAll("#img")[i]).alt = "old" ;
}
else{
    ( document.querySelectorAll("#img")[i]).alt = "Elzero New" ;
}
}
console.log("==================")
var number =(document.querySelectorAll(".input")[0]) ;
var text =(document.querySelectorAll(".input")[1]);
var section =(document.querySelectorAll(".input")[2]);
var results =(document.querySelector(".results"));


document.forms[1].onsubmit = function(event){
    event.preventDefault();
    results.innerHTML = "";
    // results.replaceChildren();
// [تقدر تستخدم وحده من الثنتين اللي فوق عشان تحذف الابناء للعنصر]
    if(section.value == "Div" ){
    for (let index = 1; index <= number.value; index++) {
let myDiv =document.createElement("div");
myDiv.innerHTML=text.value; 
myDiv.className="box";
myDiv.title="Element" ;
myDiv.id=`id-${index}`;
results.appendChild(myDiv);
    }}

else{
    for (let index = 1; index <= number.value; index++) {
        let myDiv =document.createElement("Section");
        myDiv.innerHTML=text.value; 
        myDiv.className="box";
        myDiv.title="Element" ;
        myDiv.id=`id-${index}`;
        results.appendChild(myDiv);
}
}}

console.log("==================")

