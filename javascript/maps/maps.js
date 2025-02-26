const exampleMap=new Map();
console.log(exampleMap);


//to insert element in map as use of set
let map1=new Map();
map1.set('info',{
    name:'jack',
    age:30
});
map1.set('bio',{
    name:'jack',
    age:30
});
map1.set('soco',{
    name:'jack',
    age:30
});
console.log(map1);

//you can also use object or function as key
let map2=new Map();
let obj={};
map2.set(obj,{name:'john',age:20});
console.log(map2);


//you can also access map element using get()
console.log(map1.get('info'));

//you can use the has()to check if element is in map
console.log(map1.has('info'));


//clear methold and delete methold to remove element from a map

// map1.delete('address');
// console.log(map1);
// map1.delete('info');
// console.log(map1);

// map2.clear()


// console.log(map1)

//with the help of size() you can get the number of element present in map
console.log(map1.size);

//you can also iterate through a map element using forof or foreach

for(let  [key, value ] of map1){
    console.log(key +'-'+value);
    
}
  // you can iterate through a map and get a key using keys methold
  map1.set('name','tom');
  map1.set('age',60);

  //loop through the map
  for(let key of map1.keys()){
console.log(key);

  }

  // you can iterate through a map and get avalue using keys methold
for(let values of map1.values()){
    console.log(values);
    
}

  // you can iterate through a map and get avalue using keys methold
  for(let elem of map1.entries()){
    console.log(`${elem[0]}:${elem[1]}`);
    
}
