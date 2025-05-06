/*
  Regular Expression
  - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/(www\.)?)?[a-z]\w+\.[a-z]+(:\d{4}\/\w+\.\w+\?id=\d+\&\w+=\w+)?/ig;
// or 
// let re = /(https{0,1}:\/\/(www.){0,1}){0,1}[a-z][a-z0-9_]{1,}.[a-z]{1,}(:\d{4}\/\w+\.\w+\?id=\d+\&\w+=\w+)?/ig;

console.log(re.test(url1));
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));