// input events

const inputName = document.querySelector('#nombre');
const inputPassword = document.querySelector('#password');

const heading = document.querySelector('.heading');

inputName.addEventListener('input', (e) => {
  console.log(e.target.value);
  console.log(e.target.value.length);
  heading.textContent = e.target.value;
});

inputPassword.addEventListener('input', () => {
  inputPassword.type = 'text';
  setTimeout(() => {
    inputPassword.type = 'password';
  }, 300);
});
