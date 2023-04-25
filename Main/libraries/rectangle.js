// REQUIREMENTS
const Shape = require('./shape');


// RECTANGLE INSTANCE CLASS
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  };
  render() {
    return `<rect x="90" y="45" width="120" height="120" fill="${this.shapeColor}" />`;
  }
};


// EXPORTS
module.exports = Square;