// console.log('array methold');

// 2 syntx to create array

let arr=[1,2,3,4,5,'john'];
let arr1=new Array(1,2,3,4,5,'john');
console.log(arr);
console.log(arr1); 
console.log(arr1[5]);
console.log(arr[arr.length-1]);

//index of
let student=['john','jack','sam'];
let a=student.indexOf('jack');
console.log(a)

//sort
let age1=[65,45,76,56,14,15];
age1.sort();
console.log(age1);

//reverse function
let age=[34,45,23,54];
age1.reverse()
console.log(age1);

//concat function
let age2=['a','b','c'];
let numeric=[1,2,3];
let alpanumeric=age2.concat(numeric);
console.log(alpanumeric)

//push()
let city=['jhelum','dina','rawal'];
city.push('london');
console.log(city);

//pop()
city.pop();
console.log(city);


//shift methold
city.shift();
console.log(city);

//unshift()
city.unshift()
console.log(city)

// object in javascript

let user={
    name:'jack',
    age:19,
    language:'javascript'
}
console.log(user)

let user1=new Object();
user1.name='uzair';
user1.age=12;
user1.language='react'
console.log(user1)



