let regex=/javascript/;
regex=/^java/; //mean expression will match if string stat with java
regex=/website$/ // mean that string end with 
regex==/j.vascript/ //match any one character
regex=/j*vascript/ // match any 0 or more character
regex=/j?vascr?pt/ //?afterb character mean that is optional
let txt='javascript is brain of website';
let output=regex.exec(txt);
console.log('output is',output);


if(regex.test(txt)){
    console.log(`string ${txt} matches express ${regex.source}`);
    
}
else{
    console.log(`string ${txt} matches express ${regex.source}`);
}

