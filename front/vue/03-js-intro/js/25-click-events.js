// click events

const heading = document.querySelector('.heading');
const links = document.querySelectorAll('.navegacion a');

heading.addEventListener('click', () => {
  heading.textContent = 'New heading after click!';
});

heading.addEventListener('dblclick', () => {
  heading.textContent = 'New heading after double click!';
});

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    link.textContent = 'New link after click!';
  });
});
