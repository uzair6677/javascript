console.log('hello world')

// var let const

var  language='javascript';
var course='fullstack web development';
var ratings=5;
console.log(language, course, ratings);

 language='java';

 // rules to write var name
 /*
 you cannot start var name with numbers,
 2 you can start var name with unnderscore ,letters,$symbol
 3 var name are case sensitive

*/


// most widly using programing var case type
/*
1. camelcase
2.kebab-case
3-snake_case
4 PascalCase 
*/


//const variable

const marks=97;
// marks=100; you cannot redeclare const variable
console.log(marks);

//let variable
{
let name="jack";
console.log(name);}
// console.log(name) it show error let is block level elemnet 

var city='berlin';
{
    let city='jhelum';
    console.log(city);
}
console.log(city)

const arr=[10,20,40,50];
// arr=[10,20,30,40,50]
// arr.push(30);
console.log(arr)