const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce(function (total, num) {
    total += num;
    return total;
  }, 0);
};

const multiply = function (nums) {
  return nums.reduce(function (total, num) {
    total *= num;
    return total;
  });
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num < 0) {
    return -1;
  }
  if (num < 2) {
    return 1;
  }
  let nums = [];
  for (i = num - 1; i > 0; i--) {
    nums.push(i);
  }
  let total = nums.reduce(function (total, currentNum) {
    return total * currentNum;
  }, num);
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
