// let num = window.prompt("Print Number From – To" ,"Example: 5-20");
// let numArray = num.split("-").sort()
// for(numArray[0] ;numArray[0]<=numArray[1] ; numArray[0]++){
//     console.log(+numArray[0]);
// }
let button= document.querySelector(".button") ;

let popUp= document.querySelector(".pop") ;

window.setTimeout(function () {
    popUp.style.display = "block";

},5000)
button.onclick =function(){
    popUp.style.display = "none";
}

let counter= document.querySelector(".counter");

let set_number = window.setInterval(function () {
    counter.innerHTML -= 1;
    
    if( counter.innerHTML === "0"  ){
    clearInterval(set_number)
    // location.host="Elzero.orgm";
    };
},500);

let counter2= document.querySelector("#counter");

let set_number2 = window.setInterval(function () {
    counter2.innerHTML -= 1;
    
    if( counter.innerHTML === "5"  ){
window.open("https://Elzero.org/","_blank","width=500,height=500");
};
if( counter2.innerHTML === "0"  ){
    clearInterval(set_number2)
    };
},500);