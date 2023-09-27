let firstName;
let lastName;

console.log(`${firstName || 'No fistName'} ${lastName || 'No lastName'}`);

const isActive = true;

const message = (isActive) ? 'Activo' : 'Inactivo';

// if (isActive) {
//   message = 'Activo';
// } else {
//   message = 'Inactivo';
// }

console.log(message);
