function transformFirstAndLast(array) {
  var key = array[0];
  var value = array[array.length-1];
  var obj = {};
  obj[key] = value;
  return obj;
}

console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));
