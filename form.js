//getElementById
const title = document.getElementById('main-heading');
console.log(title);

//getElementByClassName()
const listItem = document.getElementsByClassName('list-items')
console.log(listItem);

//getElementByTagName()
const li = document.getElementsByTagName('li')
console.log(li);

//QuerySelector()
const container  = document.querySelector('div');
console.log(container);

//querySelectorAll()
const cont  = document.querySelectorAll('div');
console.log(cont);

//To Access Css properties in javascript we use variable.style.css property
title.style.color = 'red';  //inline styling

for(i = 0; i < listItem.length; i++){
    listItem[i].style.fontSize = '2rem';
}

//Creating Elements
const ul = document.querySelector('ul');
const list = document.createElement('li');
ul.append(list)

//Modifying the text
list.innerText = 'X-men';

//Modifying Attribute and classes
list.setAttribute('id', 'main-heading');
list.removeAttribute('id')

console.log(title.getAttribute('id'))

list.classList.add('list-items')
//list.remove();

//navigating the DOM
//Parent Mode Traversal
console.log(ul.parentNode);  
//console.log(ul.parentElement);
console.log(ul.parentNode.parentNode);  //to know the grandparent node 

const html = document.documentElement;
console.log(html);

//Child Node Traversal
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

//Event Listeners