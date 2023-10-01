// arrow functions

const sum = (number1 = 0, number2 = 10) => {
  console.log(number1 + number2);
} // cannot use before its declaration

const technologies = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'];

const arrayForEach = technologies.forEach((tech, i) => console.log(i, tech));
const arrayMap = technologies.map(tech => tech);
const technologies2 = technologies.filter(tech => tech !== 'HTML');

sum(1, 2);
sum(600, 456);
