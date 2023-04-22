// add requirements
const index = require('../index');


// make parent shapes class 
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  };
};


module.exports = Shape;