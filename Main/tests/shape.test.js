// REQUIREMENTS
const Circle = require('../libraries/circle.js');
const Square = require('../libraries/rectangle.js');
const Triangle = require('../libraries/triangle.js');


// Tests for each of the shape classes
describe('Shape', () => {
  describe('Circle', () => {
    it('Should build Circle object and return string with fill of blue', () => {
      const shape = new Circle('hello', 'red', 'blue');
      expect(shape.render()).toEqual('<circle cx="150" cy="105" r="80" fill="blue" />');
    });
  });
  describe('Triangle', () => {
    it('Should build Triangle object and return string with fill of blue', () => {
      const shape = new Triangle('howdy', 'orange', 'pink');
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="pink" />');
    });
  });
  describe('Square', () => {
    it('Should build Square object and return string with fill of blue', () => {
      const shape = new Square('hola', 'black', 'yellow');
      expect(shape.render()).toEqual('<rect x="90" y="45" width="120" height="120" fill="yellow" />');
    });
  });
});


