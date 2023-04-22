// REQUIREMENTS
const index = require('../index');
const Shape = require('./shape');
const Square = require('./rectangle');
const Triangle = require('./triangle');
const Circle = require('./circle');


function buildSVG(shapeSVG) {
  const { text, textColor } = shapeSVG;

  let yCoord;
  shapeSVG instanceof Triangle ? yCoord = 150: yCoord = 125;

  let svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svg += shapeSVG.render();
  svg += `<text x="150" y="${yCoord}" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>\n`;
  svg += '</svg>';
  return svg;
};

module.exports = buildSVG;