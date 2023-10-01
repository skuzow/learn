// query selector

const heading = document.querySelector('.heading');

console.log(heading);

console.log(heading.textContent);
heading.textContent = 'New heading';

console.log(heading.innerHTML);
console.log(heading.tagName);
console.log(heading.classList);
console.log(heading.id);

const links = document.querySelector('.navegacion a'); // one element
const link = document.querySelectorAll('.navegacion a'); // multiple elements
console.log(links);
console.log(link);
