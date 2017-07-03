function listAllValues(obj) {
  // your code here
  var arr=[];
  for (var key in obj)
  {
    arr.push(obj[key]);
  }
  return arr;
}
