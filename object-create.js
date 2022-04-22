//1.using object literal
const student = { name: 'Asadul', age: 2 };
// console.log(student);

//2.constructor
const person = new Object()
// console.log(person);

//3.
const people = Object.create(null);
const peop = Object.create(student);
console.log(peop.name);

//4. class
class number {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const numbers = new number('Manus', 12);
// console.log(numbers);

//5. syntactical sugar    function
function hello(name) {
    this.name = name;
}
const hel = new hello('kader');
console.log(hel)
