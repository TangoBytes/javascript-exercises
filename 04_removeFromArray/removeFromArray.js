const removeFromArray = function (...theArgs) {
  let theArray = arguments[0];
  console.log(`ARRAY: ${theArray}`);
  for (arg of theArgs) {
    console.log(`ARG: ${arg}`);
    if (arg === theArgs[0]) {
    } else {
      if ((indexValue = theArray.indexOf(arg)) != -1) {
        console.log(`INDEX: ${indexValue}`);
        theArray.splice(indexValue, 1);
      }
    }
  }
  return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1, 2, 3, 4], 3));
// console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
