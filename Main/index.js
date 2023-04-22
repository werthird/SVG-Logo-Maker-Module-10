// Require inquirer and fs
const fs = require('fs');
const inquirer = require('inquirer');

const Circle = require('./libraries/circle');
const Square = require('./libraries/rectangle');
const Triangle = require('./libraries/triangle');



// Array of Questions
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three initials for your logo.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What do you want your text color to be?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want your logo to be?',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want to shape to be?',
  },
];


// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { text, textColor, shape, shapeColor } = answers;
      let shapeSVG;

      switch (shape) {
        case 'Circle':
          shapeSVG = new Circle(text, textColor, shapeColor);
          break;
        case 'Square':
          shapeSVG = new Square(text, textColor, shapeColor);
          break;
        case 'Triangle':
          shapeSVG = new Triangle(text, textColor, shapeColor);
          break;
      }
      console.log(shapeSVG.render());

      makeSVGFile(shapeSVG);
    });
};


// Function to write README file
function makeSVGFile(shapeSVG) {
  fs.writeFile('./examples/logo.svg', shapeSVG.render(), (err) =>
    err ? console.log(err) :console.log('Success!')
  );
};


// Call function to initialize app
init();

