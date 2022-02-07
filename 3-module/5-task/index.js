
function getMinMax(str) {
let allNumbers = str.split(' ');
allNumbers = allNumbers.filter(item => !isNaN(item));
let result = {
min: Math.min(...allNumbers),
max: Math.max(...allNumbers)
}
  return result;
}

const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
