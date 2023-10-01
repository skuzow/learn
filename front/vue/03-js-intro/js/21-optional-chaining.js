// optional chaining

const student = {
  name: 'Juan',
  class: 'Programming 1',
  approved: true,
}

setTimeout(() => {
  student.exams = {
    exam1: 9,
    exam2: 7,
    exam3: 10,
  }
  console.log(student.exams?.exam1); // ? check if property exists
}, 1000);

console.log(student.exams?.exam1); // ? check if property exists

console.log('Hello world!')
