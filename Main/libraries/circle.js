// REQUIREMENTS
const Shape = require('./shape');


// CIRCLE INSTANCE CLASS
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  };
  render() {
    return `<circle cx="150" cy="105" r="80" fill="${this.shapeColor}" />`;
  }
};


// EXPORT
module.exports = Circle;