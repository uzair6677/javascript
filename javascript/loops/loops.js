// for loops
for (let i = 10; i <= 100; i++) {
    console.log(i);

}

//forin iterate over object
var person = { name: 'same', lang: 'javascript', age: 19 }
for (var i in person) {
    console.log(i + '=' + person[i]);
}


//foreach
const arr=[2,3,5];
let sum=0;
arr.forEach(element=>{
    sum+=element;
    console.log(sum);
})
//white
let x=1,n=100;
while (x<=n) {
    console.log(x);
    x++;
}

//do while
let a=1,m=100;
do{
    console.log(a);
    a++;
}while(a<=m)