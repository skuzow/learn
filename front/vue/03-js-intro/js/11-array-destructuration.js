// array destructuration
const technologies = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'];

// short way
const [html, css, , , express, , , git] = technologies;

// long way
// const html = technologies[0];
// const css = technologies[1];
// const express = technologies[4];

console.log(html);
console.log(css);
console.log(express);
console.log(git);
