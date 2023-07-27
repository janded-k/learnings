/*const buttonTwo = document.querySelector('.btn-2');
function alertBtn() {
    alert('I love Javascript')
}

buttonTwo.addEventListener("click", alertBtn);

//MouseOver
const newBackgroundColor = document.querySelectorAll('.box');
console.log(newBackgroundColor);
function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';  
};
newBackgroundColor.addEventListener("mouseover", changeBgColor); */

/* document.querySelector('.btn').addEventListener("dblclick", dblclickDemo)

function dblclickDemo(){
   alert("This is a demonstration of how to create a double click event")
}

let greetings = document.querySelector('p');
document.querySelector('input').addEventListener("keyup", captureInput)
function captureInput(e){
    greetings.innerText = (`Hello ${e.target.value}, welcome to my website.`)
} */

// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    quote: `"The best way to find yourself is to lose yourself in the
    service of others."`,
    person: `Mahatma Gandhi`
},  {
    quote: `"If you want to live a happy life, tie it to a goal, not
    to people or things"`,
    person: `Albert Einstein`
},  {
    quote: `"At his best, man is the noblest of all animals; separated
    from law and justice he is the worst."`,
    person: `Aristotle`
},  {
    quote: `"Your time is limited, so don't waste it living someone
    else's life"`,
    person: `Steve Jobs`
},  {
    quote: `"Tell me and I forget. Teach me and I remember. Involve 
    me and I learn"`,
    person: `Benjamin Franklin`
},  {
    quote: `"it does not matter how slowly you go as long as you don't
    stop."`,
    person: `Confucius`
},  {
    quote: `"Remember that not getting what you want is a wonderful stroke
    of luck"`,
    person: `Dalai Lama`
},  
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person; 
})