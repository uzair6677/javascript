// function fun1()
// {
//     console.log('funct1 is excuting');
    
// }
// function fun2(){
//     console.log('funct2 is excuting');
    
// }
// fun1();
// fun2()

function msg(str){
    setTimeout(function(){
console.log('how callback work');
    },5000)
}
msg();