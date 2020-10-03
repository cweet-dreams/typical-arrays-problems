
exports.min = function min (array) {
  if (array &&  array.length > 0) {
  let min = array[0];
  for (let i = 1; i < array.length; ++i) {
    if (array[i] < min) {
    min = array[i];
    }
  }
  return min;
  } else {
  return 0;
  }
};

exports.max = function max (array) {
  if (array &&  array.length > 0) {
  let max = array[0];
  for (let i = 1; i < array.length; ++i) {
    if (array[i] > max) {
    max = array[i];
    }
  }
  return max;
} else {
  return 0;
}
};


exports.avg = function avg (array) { 

  if (array&&  array.length !== 0 ) {
   let result = 0;
   count = 1;
   sum = array[0];
    for ( let i = 1; i < array.length; ++i) {
    sum += array[i];
    count += 1;
    result = sum/count;
  }
   return result
 } else {
   return 0;
 }
};
