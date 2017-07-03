function removeNumberValues(obj) {
  // your code here
  for(var key in obj){
    if(Number.isInteger(obj[key]) == true)
      delete obj[key];
  }
  return obj;
}
