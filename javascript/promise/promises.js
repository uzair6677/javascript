function func1(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const error=false;
            if(!error){
                 console.log('promise operation is succeesul')
            resolve();
                }
            else{
                console.log('promise operation was unsucessful');
                reject('mission failed')
            }
        },2000)
    })
}
func1().then(function(){
    console.log('thanks');
    
}).catch(function (error) {
    console.log('no thanks ' + error);
    
})