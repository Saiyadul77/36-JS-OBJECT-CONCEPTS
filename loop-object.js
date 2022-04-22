const bottle = { color: 'yellow', hold: 'water', price: 50 }
/* 
for(let i=0; i<10; i++)
for(const num of numbers)  // array
for(const prop in numbers) // object
*/
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);  //for get property and value
}
const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

const entries = Object.entries(bottle);
// console.log(entries)
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value)
}