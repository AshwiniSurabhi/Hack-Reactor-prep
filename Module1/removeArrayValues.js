function removeArrayValues(obj) {
  // your code here
  for(var key in obj){
    if(Array.isArray(obj[key]) === true)
      delete obj[key];
  }
}
