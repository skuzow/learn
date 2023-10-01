// array manipulation
const technologies = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'];

technologies.push('Git'); // add element at the end
technologies.unshift('MongoDB'); // add element at the beginning

technologies.pop(); // remove element at the end
technologies.shift(); // remove element at the beginning

technologies.splice(2, 1); // remove element at index 2
technologies.splice(2, 2); // remove element at index 2 and 3

technologies.filter((tech) => tech !== 'HTML'); // filter elements & return no HTML values

console.log(technologies);

const newArray  = [...technologies, 'Vue.js']; // copy array and add element at the end
const newArray2  = ['Vue.js', ...technologies]; // copy array and add element at the beginning

console.log(newArray);
console.log(newArray2);
