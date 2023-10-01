// submit events

const form = document.querySelector('#formulario');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('#nombre').value;
  const password = form.querySelector('#password').value;
  if (name === '' || password === '') {
    console.log('Todos los campos son obligatorios');
    return;
  }
  console.log(name);
  console.log(password);
  console.log('All fine, submiting...')
});
