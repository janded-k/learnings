console.log('Hello World');
let  age = 30;
age = 31;
console.log(age);

const name = 'John';
const identity = "Chancellor"
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;  //this is undefined

console.log(typeof name);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//concatenation using Template String
console.log(`My name is ${name} and i am ${age}`);
let s = 'Hello World'
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 7));
console.log(s.split(''));
let d = 'technology, computer dream, standup comedy';
console.log(d.split(', '));

//Arrays
const numbers = new Array(1,3,4,5,6);
console.log(numbers);
const fruits = ['apples', 'oranges', 'pears', 10, true, null];
console.log(fruits[2]);

fruits[5] = 'mangoes';
console.log(fruits);

fruits.push('udara');  //to add item to the end
console.log(fruits);

fruits.unshift('pineapple');
console.log(fruits);

fruits.pop();  //to remove the last element
console.log(fruits);

console.log(Array.isArray('hello')); //to check if an element is in array. it returns a boolean
console.log(fruits.indexOf('mangoes'));

//object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    Hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: "MA"
    }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.Hobbies[0]);
console.log(person.address.city);

person.email = 'john@gmail.com'; //used to add another field
console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[2])

const todoJSON = JSON.stringify(todos); //used to send data to servers
console.log(todoJSON);

//  loop
for(let i = 0; i<10; i++){
    console.log(i);
    console.log(`For Loop Number: ${i}`);
}

let i = 0;
while(i <= 10){
    console.log(`while Loop Number: ${i}`);
    i++;
}

for(let i = 0; i<todos.length; i++){

    console.log(todos[i].isCompleted);
}

//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
return todo.text;
});
console.log(todoText);

let todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
});
console.log(todoCompleted);

let Completed = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
})
console.log(Completed);

//conditional statement
const f = `20`;
if(f == 10){
    console.log('x is 10');
}
else if(f > 5)
{
    console.log('it is greater than 5')
}
else{
    console.log('this is another number')
}

//using and, Or can prevent nesting if statement
if(f == 20 || f < 10)
{
    console.log('the number is between 11 and 19')
}

//ternary operator
const c = 10; 
const color = c > 9 ? 'red' : 'blue'; //it means if x is greater than 9 then red else blue
console.log(color);

//switch statement
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is Not available');
        break;
}

//functions  
function addNumbers(num1, num2){
    return num1 + num2;
}
console.log(addNumbers(5, 6));

function addNumbers(num1 = 9, num2 = 16){
    return num1 + num2;
}
console.log(addNumbers());
    
// object oriented programming using constructor function
function Human(Name, Surname, dob){
    this.Name = Name;
    this.Surname = Surname;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
}

//instantiate object
const human1 = new Human('John', 'Doe', '4-3-1980')
console.log(human1);
let human2 = new Human('Mary', 'Ken', '3-5-1999')
console.log(human2.Name);

console.log(human2.getBirthYear());

//using class
class Body{
    constructor(Name, Surname, dob){
        this.Name = Name;
        this.Surname = Surname;
        this.dob = new Date(dob);
    }
 getBirthYear(){
     return this.dob.getFullYear();
 }  

 getFullName(){
    return this.Name.getFullName();
 }
}