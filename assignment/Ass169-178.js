let request = new XMLHttpRequest();
 request.open("GET","./Ass169-178.json");
  request.send();
  
  console.log( request );
  console.log( request.readyState );
  console.log( request.status );
  request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 0 ){
        // console.log(this.responseText);
      let myJsObject = JSON.parse(this.responseText);

        console.log(myJsObject );
        setTimeout(function(){
        console.log( `Data Loaded`);

        },0)

    }
  }

// =======================================> # -> 3

let json_Obj =`[{
  "Name": "Elzero",
  "id": 100,
  "title": "Elzero courses",
  "subjects": ["HTML", "CSS", "JS"]

},
  {
  "Name": "Elzero Web",
  "id": 101,
  "title": "Elzero Web courses",
  "subjects": ["HTML", "CSS", "php"]

},
{
"Name": "Just",
"id": 102,
"title":"Just courses" ,
"subjects": ["HTML", "CSS", "python"]

},
{
"Name": "yarmouk",
"id": 103,
"title": "yarmouk courses",
"subjects": ["HTML", "CSS", "JS","Json"]

},
{
"Name": "m3aan",
"id": 104,
"title": "m3aan courses",
"subjects": ["HTML", "CSS", "JS","Json"]
}]`;

console.log(json_Obj);  
let mainData = JSON.parse(json_Obj);
console.log("befor edit");  
console.log(mainData);  

let data = document.getElementById("data");

for (let i = 0; i < mainData.length; i++) {
  mainData[i].subjects = "All"; 
  var keys =Object.keys(mainData[i]);
  var Values =Object.values(mainData[i]);
  let j = 0;
  let a =0
  let div=document.createElement("div");
  div.innerHTML=`<h2>${keys[a++]}  ${Values[j++]}</h2>
  <p>${keys[a++]}  ${Values[j++]}</p>
  <p>${keys[a++]}  ${Values[j++]}</p>
  <p>${keys[a++]}  ${Values[j++]}</p>`;
  data.append(div); 
}
console.log("After edit");  
console.log(mainData);  
let updatedData= JSON.stringify(mainData);
console.log(updatedData);  



// mainData Variable Content

// 0: {id: 1, title: 'Title 1', body: 'Article Number 1 Body', category: 'All', author: 'Ali'}
// 1: {id: 2, title: 'Title 2', body: 'Article Number 2 Body', category: 'All', author: 'Mahmoud'}
// 2: {id: 3, title: 'Title 3', body: 'Article Number 3 Body', category: 'All', author: 'Osama'}
// 3: {id: 4, title: 'Title 4', body: 'Article Number 4 Body', category: 'All', author: 'Sayed'}
// 4: {id: 5, title: 'Title 5', body: 'Article Number 5 Body', category: 'All', author: 'Ahmed'}

// // UpdatedData Variable Content
// "JSON Object Content Here"

