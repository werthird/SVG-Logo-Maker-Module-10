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

function buildSVG(shape) {
  let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`;
  svg += shape.render();
  svg += '</svg>';
  return svg;
  // makeSVGFile(svg);
};

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(({ shape, shapeColor }) => {
      let shapeSVG;

      switch (shape) {
        case 'Circle':
          shapeSVG = new Circle(shapeColor);
          break;
        case 'Square':
          shapeSVG = new Square(shapeColor);
          break;
      };
      return shapeSVG;
    })
    .then((shapeSVG) => {
      const svg = buildSVG(shapeSVG);
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


init();