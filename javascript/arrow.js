// creating reguLAR FUNCTIOn

function func1(){
    console.log('this is arrow function lecture');
    
}
func1();

//storing regular function inside variable

const  fun2=function(){
    console.log('this lectue is about arrow function');
}
fun2()



//arrow function
const fun3=()=>{
    console.log('this is arrow function');
    
}
fun3();

// arrow function in one line
const fun4 = () =>' this is one liner arrow function';
console.log(fun4());

// when you want to pass 1 arrgument arrow functionn
const greet=name=>`my name is  ${name}`
console.log(greet('umais'));
// when you want to pass multiplearrgument arrow functionn
const great=(name,surname)=>'hello' +name+''+surname;
console.log(great('umais','tariq'));

