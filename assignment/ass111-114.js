let test = document.querySelector("#test");
let family = document.getElementById("font");
let color = document.querySelector("#color");
let size = document.querySelector("#size");
// console.log("size.value");

if (localStorage.getItem("Family")) {

    console.log(localStorage.getItem("Family"));
    test.style.fontFamily = localStorage.getItem("Family");
    family.value=localStorage.getItem("Family"); 
    console.log(family.value)

}
else{
    console.log("clear");
    test.style.fontFamily = `${family.value}`;      
}

if (localStorage.getItem("backgroundColor")) {

    console.log(localStorage.getItem("backgroundColor"));
    test.style.backgroundColor = localStorage.getItem("backgroundColor");
    color.value = localStorage.getItem("backgroundColor"); 
    console.log(color.value);

}
else{
    console.log("clear");
    test.style.backgroundColor=`${color.value}`;
}


if (localStorage.getItem("fontSize")) {

    console.log(localStorage.getItem("fontSize"));
    test.style.fontSize =localStorage.getItem("fontSize");
    size.value =localStorage.getItem("fontSize"); 
    // console.log(size.value)

}
else{
    console.log("clear");
    test.style.fontSize = `${size.value}`;
}


family.onchange = function () {
test.style.fontFamily =`${family.value}`;
localStorage.setItem("Family" ,`${family.value}`);
console.log("cha")
console.log(family.value)
}

color.onchange = function () {
    test.style.backgroundColor=`${color.value}`;
localStorage.setItem("backgroundColor" ,`${color.value}`);
}

size.onchange = function () {
    test.style.fontSize =`${size.value}`;
    localStorage.setItem("fontSize" , `${size.value}`);
    localStorage.getItem("fontSize")
}

// ============================================================

let form = document.querySelector("#form2");

if ( sessionStorage.name ) {
    
    form.children[0].value =sessionStorage.name ;
}
if ( sessionStorage.age ) {
    
    form.children[1].value =sessionStorage.age ;
}
if ( sessionStorage.country ) {
    
    form.children[2].value =sessionStorage.getItem("country") ;
}
if ( sessionStorage.hobby ) {
    
    form.lastElementChild.value =sessionStorage["hobby"] ;
}
else{
    form.lastElementChild.value = "Gaming";
    //   على الاوبشن اللي بدي ياهselected او بعمل من ملف الاتش تي ام ال 
}

form.children[0].onkeyup  =function () {
    sessionStorage.setItem("name", form.children[0].value);
    console.log(form.children[0].value);
console.log("focus")
}
form.children[1].onblur=function () {
    sessionStorage.setItem("age", form.children[1].value);
    console.log(form.children[1].value);

}
form.children[2].oninput=function () {
    sessionStorage.setItem("country", form.children[2].value);
    console.log(form.children[2].value);

}
console.log(form.lastElementChild);
console.log(form.lastElementChild.innerHTML);

form.lastElementChild.onchange = function () {
    sessionStorage.setItem("hobby", form.lastElementChild.value);
    console.log(form.lastElementChild.value);

}

