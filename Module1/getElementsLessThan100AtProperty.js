function getElementsLessThan100AtProperty(obj, key) {
  // your code here
  if(obj[key] && Array.isArray(obj[key]))
  return obj[key].filter(function(item){
      return item<100;    
  },[]);
  else
    return [];
}
