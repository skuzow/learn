// modify text

const heading = document.querySelector('.heading');

heading.textContent = 'New heading';
heading.classList.remove('text-4xl');

const inputName = document.querySelector('#nombre');
inputName.value = 'Juan';

const links = document.querySelectorAll('.navegacion a');

links.forEach(link => link.textContent = 'New text');
