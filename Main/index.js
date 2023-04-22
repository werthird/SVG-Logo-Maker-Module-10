// Require inquirer and fs
const fs = require('fs');
const inquirer = require('inquirer');


// Array of Questions
const questions = [
  {
    type: 'input',
    name: 'shape',
    message: 'What shape do you want your logo?',
  }
];


// Function to generate svg formate
function generateSVG(data) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${data.shape} cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

  </svg>`
};


// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers.shape);
      makeSVGFile(answers);
    });
};


// Function to write README file
function makeSVGFile(answers) {
  fs.writeFile('./examples/logo.svg', generateSVG(answers), (err) =>
    err ? console.log(err) :console.log('Success!')
  );
};


// Call function to initialize app
init();
