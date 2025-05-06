let addSubmit = document.querySelector(".add");
let input = document.querySelector(".input");
let tasksParent = document.querySelector(".tasks");



addSubmit.onclick = function() {
console.log("hi");
create(); 
}



function create() {
console.log("hi");
let taskDiv = document.createElement("div");
var delSubmit = document.createElement("submit");
tasksParent.append(taskDiv);
taskDiv.innerHTML=`${input.value}`;
taskDiv.append(delSubmit);
delSubmit.innerHTML="Delete"
delSubmit.clchallangeName="delete";
input.value = "";
window.localStorage.setItem("tasks",`${taskDiv.innerHTML}` )

delSubmit.addEventListener("click", function() {
    console.log("delete");
    this.parentElement.remove() ;
});


// window.localStorage.setItem("tasks", `${tasksParent.innerHTML}`);
console.log(window.localStorage.getItem("tasks"));
}


// tasksParent.innerHTML=`${window.localStorage.getItem("tasks")}`;
// let AllDel = document.querySelectorAll(".delete");
// AllDel.forEach(element => {
//     element.addEventListener("click", function() {
//         console.log("delete");
//         this.parentElement.remove() ;
//     });

// });
console.log(window.localStorage.getItem("tasks"));
// console.log(window.localStorage.key(0));


// window.localStorage.clear();
