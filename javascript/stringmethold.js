// console.log('all about string');

let variable1 = 'web development';
let variable2 = 'course';
// console.log(variable1+" "+variable2);

let variable3 = variable1.concat(" ", variable2);
console.log(variable3);

let html = "<h1>Heading<h1>" + " " + "<p> paragraph</p> newj";
console.log(html);

console.log(html.length);
console.log(html.toLocaleLowerCase());
console.log(html.toUpperCase());
console.log(html[10]);
console.log(html.indexOf('g'));
console.log(html.charAt(6));
console.log(html.endsWith('newj'));
console.log(html.includes('newj'));
console.log(html.substring(1, 6));
console.log(html.slice(0, 4));
console.log(html.split('>'))
console.log(html.replace('Heading', 'course'));

let item1 = 'android';
let item2 = 'ios';
let html2 = `<h1>hi i use  ${item1} and my friend uses ${item2} <h3> i love web development <h3><h1>`
console.log(html2);

document.body.innerHTML=html2;

