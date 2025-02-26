// object creating using object literal

var motorcycle={
    brand: 'cd70',
    model:'ninja',
    year:1997
}
console.log(motorcycle);

// object created using constructor function
//using blueprint,reusable
function MyMotorcycle(brand,year,model){
    this.brand=brand;
    this.model=model;
    this.year=year;
}

//create object 
let bikes=new MyMotorcycle('honda','cbr',20233);
console.log(bikes);
