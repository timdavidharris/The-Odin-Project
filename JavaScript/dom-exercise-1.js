// From this website:
// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation#exercise

// Code from The Odin Project below
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// My code below
const redPara = document.createElement('p');
redPara.classList.add('redPara');
redPara.textContent = 'Hey I\'m red'
redPara.style.cssText = 'color: red';
container.appendChild(redPara);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = 'I\'m a blue 3'
h3.style.cssText = 'color: blue';
container.appendChild(h3);

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.textContent = 'newDiv';
newDiv.style.cssText = 'border-style: solid; background-color: pink';
container.appendChild(newDiv);

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = 'I\'m in a div!';
newDiv.appendChild(h1);

const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'ME TOO!';
newDiv.appendChild(p);
