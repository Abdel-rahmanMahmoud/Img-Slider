let input =document.querySelector(".classes-to-add");
let output =document.querySelector(".classes-to-remove");

let current =  document.querySelector(".element.current")

console.log(current.tagName);

input.onblur = function(){
    if(input.value != ""){
    current.className += " " + input.value.toLowerCase();
input.value ="";
}
let currentClasses =current.classList.value.split(" ").sort();
let div =  document.querySelector(".classes-list div")
div.innerHTML="";
for (let index = 0; index < currentClasses.length; index++){
let span =document.createElement("span");
span.append(currentClasses[index]);
div.append(span);
}
}


output.onblur= function(){
    var outputSplit =output.value.split(" ");
for(let i=0;i< outputSplit.length ;i++){
    if (current.classList.contains(`${outputSplit[i].toLowerCase()}`)){
    current.classList.remove(`${(outputSplit[i]).toLowerCase()}`) ; 
}}
if(output.value != ""){

    output.value ="";
    }
    let currentClasses = current.classList.value.split(" ").sort() ;
    let div =  document.querySelector(".classes-list div")
    div.innerHTML="";
    for (let index = 0; index < currentClasses.length; index++) {
    let span =document.createElement("span");
    span.append(currentClasses[index]);
    div.append(span);
    }}
// الجملة الاف اللي فوق عشان ما يعطي ايرور لانه ممكن ما يكون الاشي موجود لسا غعشان اصلا تتاكد قبل التنفيذ انه موجود الكلاس 
// ===============================================
document.querySelector("p").remove();
let ouElment = document.querySelector(".our-element");
ouElment.id = "hi";
ouElment.after(document.createElement("div"));
ouElment.before(document.createElement("div"));
ouElment.previousElementSibling.title="Start Element";
ouElment.previousElementSibling.setAttribute("data-value" ,"Start",);
ouElment.previousElementSibling.innerHTML="Start ";
ouElment.nextElementSibling.title="End Element";
ouElment.nextElementSibling.setAttribute("data-value" ,"End",);
ouElment.nextElementSibling.innerHTML="End ";
// ===============================================
let Elzero = document.querySelector(".Elzero");
console.log(Elzero.lastChild.nodeValue.trim())
// ===============================================

document.body.onclick = function(e){
    console.log(e.target.tagName)
    console.log(e.target.localName)
}
