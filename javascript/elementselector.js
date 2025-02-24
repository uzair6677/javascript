// single element selector

// get element by element
// let x = document.getElementById('elemetselector');
// x.style.color = 'green';
// x = x.className;
// x=x.childNodes;
// x.innerText = "element selector text changing";
// x.innerHTML='<b>heading1</b>'
// console.log(x);

// let a = document.getElementById('test');

// a = a.childNodes;
// console.log(a);

//query selector()
//1 single element selector using id
// let x=document.querySelector('#elemetselector');
// x.style.color='red';

// 2 single element selector using class
// let x=document.querySelector('.heading1');
// x.style.color='red';

//multi element selector using dom

//queryselectorAll()

// let b=document.querySelectorAll('div')

// console.log(b)

// //getelement by tagname()
let c = document.getElementsByTagName('article');
console.log(c)

for (let i = 0; i < c.length; i++) {
    c[i].style.border = '2px solid green';
}

// gey element bt classnam
let n = document.getElementsByClassName('heading1');
console.log(n)

