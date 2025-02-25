//basic of fetch api

// fetch('URL').then(response=>{

//     // handle response data
// }).catch(err =>{
//     //handle error
// })


// fetch('url').then(res=>{
//     res.json()
// }).then(json=>{
//     console.log(json)
// })



//syntax of get request
function getdata() {
    fetch('https://api.github.com/orgs/nodejs').then(response => { return response.json() }).then(data => { console.log(data) }).catch(error => { console.log(error) })
};
getdata();

//syntax to xml format
function gettext(){
    url='fetchapi.txt';
    fetch(url).then(response=>{return response.text()}).then(dat=>(console.log(dat)
    )).catch(error=>{console.log('error is found');
    })
}
gettext();


//syntax for post request
let data={
    first_name:'john',
    last_name:'anderon',
    job_title:'software'
}
const option={
    methold:'Post',
    body:JSON.stringify(data),
    headers:{
        'content-type':'application/json'
    }
}
fetch('url',option).then(res=>{res.json();}).then(res=>{
    console.log(res)
})

