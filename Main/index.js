// Require inquirer and fs
const fs = require('fs');
const inquirer = require('inquirer');

const Circle = require('./libraries/circle');
const Square = require('./libraries/rectangle');
const Triangle = require('./libraries/triangle');
const buildSVG = require('./libraries/render');



// Array of Questions
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three initials for your logo.',
    validate: function(input) {
      if (input.length <= 3) {
        return true;
      } else {
        return 'Please enter up to three characters.';
      }
    }
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
      return shapeSVG;
    })
    .then((shapeSVG) => {
      let svg = buildSVG(shapeSVG);
      return svg;
    })
    .then((svg) => {
      makeSVGFile(svg);
    })
};


// Function to write README file
function makeSVGFile(shapeSVG) {
  fs.writeFile('./examples/logo.svg', shapeSVG, (err) =>
    err ? console.log(err) :console.log('Success!')
  );
};


// Call function to initialize app
init();

