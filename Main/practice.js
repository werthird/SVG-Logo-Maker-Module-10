const fs = require('fs');
const inquirer = require('inquirer');

// Array of Questions
const questions = [
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want your logo to be?',
    choices: ['Circle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want to shape to be?',
  },
];

// Shape Class
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  };
};
// Circle Class
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `
      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    `;
  };
};
// Square Class
class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  };
  render() {
    return `
      <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />
    `;
  };
};


// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(({ shape, shapeColor }) => {
      console.log(shape);
      console.log(shapeColor);
      
      let shapeSVG;

      switch (shape) {
        case 'Circle':
          shapeSVG = new Circle(shapeColor);
          console.log(shapeSVG);
          break;
        case 'Square':
          shapeSVG = new Square(shapeColor);
          console.log(shapeSVG);
          break;
      }

      console.log(shapeSVG.render());
    });
};

init();