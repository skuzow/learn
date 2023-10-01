// arrow array methods
const technologies = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'];
const numbers = [10, 20, 30];

// includes
const result = technologies.includes('HTML');
console.log(result);

// findIndex | returns the index of the first element that matches the condition
const result2 = technologies.findIndex(tech => tech === 'Node.js');
console.log(result2);

// some | at least one needs to be true
const result3 = numbers.some(number => number > 25);
console.log(result3);

// find | returns the first element that matches the condition
const result4 = numbers.find(number => number === 10);
console.log(result4);

// every | all need to be true
const result5 = numbers.every(number => number > 15);
console.log(result5);

// reduce | sum all elements
const result6 = numbers.reduce((total, currentNumber) => total + currentNumber);
console.log(result6);

// filter | returns an array with all elements that match the condition
const result7 = technologies.filter(tech => tech === 'Express.js');
console.log(result7);
