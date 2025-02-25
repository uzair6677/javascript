// Constructor function
function Motorcycle() {
    this.brand = 'Kawasaki';
    this.model = 'Ninja';
}

// Adding a method to the prototype
Motorcycle.prototype.motoGP = function() {
    console.log('Always wear a helmet while riding bikes.');
};

// Creating an instance of Motorcycle
let bikes = new Motorcycle();

console.log(bikes.toString());        // Calls the default Object.prototype.toString()
console.log(bikes.valueOf());         // Calls the default Object.prototype.valueOf()
console.log(bikes.hasOwnProperty('brand')); // true (checks if 'brand' is a direct property)
console.log(bikes.hasOwnProperty('motoGP')); // false (motoGP is inherited from prototype)
console.log(Motorcycle.prototype.isPrototypeOf(bikes)); // true (checks if bikes inherits from Motorcycle.prototype)
console.log(bikes.propertyIsEnumerable('brand')); // true (checks if 'brand' is enumerable)
console.log(bikes.toLocaleString());  // Calls the default Object.prototype.toLocaleString()
