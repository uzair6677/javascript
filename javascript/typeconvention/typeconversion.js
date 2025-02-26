// console.log('typecoversion ');

//type converion
let variable1=100;
variable1 =String(120);
console.log(variable1,(typeof variable1));

let variable2=true;
variable2 =String(true);
console.log(variable2,(typeof variable2));;

let variable3;
variable3 =String(new Date());
console.log(variable3,(typeof variable3));

let arr;
console.log(arr,(typeof arr));
arr=String([10,20,30,40]);
console.log(arr,typeof arr)

let x=parseFloat("842.5353");

console.log(x.toFixed(2),typeof x);


//type coercion

let a='hello ';
let b='world';
console.log(a+b);

let c=9
let d=29;
console.log(c+d);

