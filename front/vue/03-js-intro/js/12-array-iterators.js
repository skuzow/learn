// array iterators
const technologies = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'];

// forEach
const arrayForEach = technologies.forEach((tech, i) => {
  console.log(tech, i);
  return tech;
});

// map
const arrayMap = technologies.map((tech) => tech);

console.log(arrayForEach); // undefined
console.log(arrayMap); // returns a new array
