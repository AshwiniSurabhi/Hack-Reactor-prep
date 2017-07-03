function convertObjectToList(obj) {
  // your code here
  var arr = [];
  for (var key in obj){
    arr.push([key,obj[key]]);
  }
  return arr;
  
}
