const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  if (typeof num != Number) {
    num = Number(num);
  }
  let fibonacciArray = [1];
  while (!fibonacciArray[num - 1]) {
    for (let i = 0; i < 500; i++) {
      if (!fibonacciArray[i - 1]) {
        firstNum = 0;
      } else {
        firstNum = fibonacciArray[i - 1];
      }
      fibonacciArray.push(firstNum + fibonacciArray[i]);
    }
  }
  return fibonacciArray[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
