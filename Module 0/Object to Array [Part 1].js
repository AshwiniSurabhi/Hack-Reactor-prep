function getAllKeys(obj) {
  var arr=[];
  for (var key in obj)
  {
   // console.log(key);
    arr.push(key);
  }
  return arr;
}
