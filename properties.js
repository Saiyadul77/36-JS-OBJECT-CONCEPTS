const bottle = { color: 'yellow', hold: 'water', price: 50 }
//getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

//get all properties values
const values = Object.values(bottle);
// console.log(values);

//get all properties keys and values at a time
const entities = Object.entries(bottle);
// console.log(entities);

//if seal property than cann't delete any property and property values
Object.seal(bottle);

// change property value ...
bottle.price = 100;

// delete property and property value
delete bottle.color;
console.log(bottle);