import REGEX from '../constants/regex';

const hexToRgbArray = (hexColor) => {
  const hexR = parseInt(hexColor.slice(1, 3), 16);
  const hexG = parseInt(hexColor.slice(3, 5), 16);
  const hexB = parseInt(hexColor.slice(5, 7), 16);

  return [hexR, hexG, hexB];
};

const isHexColor = (colorCode) => colorCode[0] === '#' && colorCode.length === 7;
// ITU-R BT.709 formula
const getLuma = ([red, green, blue]) => 0.2126 * red + 0.7152 * green + 0.0722 * blue;

export const getGrayScale = (color) => {
  const rgb = isHexColor(color) ? hexToRgbArray(color) : color.match(REGEX.RGB).slice(1);

  const luma = getLuma(rgb);

  return luma < 255 / 2;
};

export const initArray = (length, fillValue) => Array.from({ length }).map(() => fillValue);

export const isNumeric = (value) => new RegExp(REGEX.NUMBER).test(value);
