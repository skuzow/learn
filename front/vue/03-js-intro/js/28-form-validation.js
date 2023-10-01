// form validation

const form = document.querySelector('#formulario');

form.addEventListener('submit', e => {
  e.preventDefault();

  // prevent duplicated alerts
  const prevAlert = form.querySelector('.alerta');
  prevAlert?.remove();

  // generate alert
  const alert = document.createElement('DIV');
  alert.textContent = 'Todos los campos son obligatorios';
  alert.classList.add('alerta', 'bg-red-500', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black');
  alert.classList.add('bg-red-500');

  const name = form.querySelector('#nombre').value;
  const password = form.querySelector('#password').value;
  if (name === '' || password === '') {
    form.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
});

