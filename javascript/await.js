//basic syntax to write async function

async function name(params) {
    //statement

}

//Example of async functiom
async function fun() {
    console.log('async/await tutorial');
    return Promise.resolve(1);  // This function returns a resolved Promise with value 1
}

fun().then(function (res) {
    console.log(res);
});


// basic syntax to write await keyword

// let result=await Promise;

//Example of await

async function fun2() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done with asyn/await'), 1000);
    })
    let result =await promise;
    console.log(result);
}


fun2()

