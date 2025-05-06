function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
       let a= [`Hello ${zName.split(" ")[0]} ${zName.split(" ")[1][0]}.`].join(" ");
    //    or 
       a= [`Hello ${zName.split(" ")[0]} ${zName.split(" ")[1][0]}.`].toString();        
        // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
      return a;
    }
    function ageWithMessage(zAge) {
let b=`Your Age Is ${parseInt(zAge)}`;
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
      return b;
    }
    function countryTwoLetters(zCountry) {
        let c = "You Live In " + zCountry[0] +  zCountry[1];
        // or 
        c ="You Live In " +  zCountry.slice(0,2);
        // or 
        c ="You Live In " +  zCountry.substring(0,2);
        return c;
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
return `${namePattern(zName)}, ${ageWithMessage(zAge)},  ${countryTwoLetters(zCountry)}`;
    }
   namePattern(zName);
    ageWithMessage(zAge);
   countryTwoLetters(zCountry);
    return fullDetails(); // Do Not Edit This
}
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY
  console.log('===================');

  function itsMe() {
    return `Iam A Normal Function`;
  }
  
  console.log(itsMe()); // Iam A Normal Function

  let itsMee = () => "Iam An arrow  Function" ;
  
  console.log(itsMee()); // Iam An arrow Function
  console.log('===================');
  
  function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
  }
  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

  let urlCreate2 = (protocol , web , tld) =>{
    return `${protocol}://www.${web}.${tld}`;
  }

  console.log(urlCreate2("https", "elzero", "org")); // https://www.elzero.org
  console.log('===================');

//   function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }

//  let  checker = zName => {
//       return  status =>{
//         return  salary => { return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;}
//       }
//  }
 let checker = zName => status => salary =>
  status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

  
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
  console.log ('===================');
  console.log ('===================');
  console.log('===================');

  function specialMix(...data) {
    let b =0;
    let c =[];

    for(let i=0 ; i < data.length ;i++ ){

if ((isNaN(parseInt(data[i])) === false) ){
    b += parseInt(data[i])  ;

}    
else {
c.push(data[i]);
}
}
if (c.length == data.length){
    return "All Is Strings"
}
else
{ return b } 

}

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
