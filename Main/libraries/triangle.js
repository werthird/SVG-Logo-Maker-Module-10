// REQUIREMENTS
const Shape = require('./shape');


// TRIANGLE INSTANCE CLASS
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  };
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
};


// EXPORTS
module.exports = Triangle;