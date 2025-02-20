// if statement

// different operator
//a==b if a is equal to b
//a=b a is stored in b
//a>b a is greater then b
// a<b a is less then b
//a>=b a is greater then or equal to b
//a<=b a is less then or equal to b
// a===b a has some value and same type as b


//if statement
if (5 > 0) {
    console.log('5 is greater then 0')

}
if (5 < 0) {
    console.log('5 is lesser then 0');

}

//if else statement
let age = 15;
if (age > 18) {
    console.log('you are adult');

} else {
    console.log('you are not adult');

}

//else if statement
let salary = 500;
if (salary > 1000) {
    console.log('your salary is greater then 1000');

}
else if (salary < 1000) {
    console.log('your salary is less then 1000');

}

// ternary operator to use if else
console.log(age == 19 ? 'you are 19' : 'you are not 19');

//switch case
switch (age) {
    case 18:
        console.log('you are adult');

        break;
    case 15:
        console.log('you are in teenage');
        break;
    case 70:
        console.log('you are senior citizen');

    default:
        console.log('you are unknown age');

        break;
}