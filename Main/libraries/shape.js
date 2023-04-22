// REQUIREMENTS
const index = require('../index');


// PARENT SHAPE CLASS 
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  };
};

//EXPORT
module.exports = Shape;