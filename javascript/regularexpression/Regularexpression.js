//syntax to create regular expression
//are pattern that use to match to string
//flag g and i g serach for string
let regex=/javascript/;

// console.log(regex);
// console.log(regex.source);

// predefined function or methold

// exec()=>return an array for match or no match

let txt='javascript is brain of website javascript';
let output1=regex.exec(txt);
console.log(output1);
console.log(output1.input);
console.log(output1.index);
let output2=regex.exec(txt);
console.log(output2);

//test()=>return boolean value  true or false

let output3='javascript is brain of website javascript';
let output4=regex.test(output3)
console.log(output4);

//match => return an array or null
let output5=txt.match(regex);
console.log(output5);


//search()=>return index of first else or -1
let output6=txt.search(regex);
console.log(output6);

//replace()=>return new replace string with all replacement (if no flag is give only first replace)
let output7=txt.replace(regex,'python');
console.log(output7);

