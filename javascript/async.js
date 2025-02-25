// //synchronus programing

// function fun2(){
//     console.log('fun2 is running');
    
// }
// function fun1(){
//     console.log('fun1 is running');
//     fun2();
//     console.log('fun1 has ended')
// }
// fun1();


//asynchronus programing

function fun2(){
setTimeout( function(){
    console.log('fun2 is running');
    
}, 10000);
}

function fun1(){
        console.log('fun1 is running');
        fun2();
        console.log('fun1 has ended')
    }
    fun1();