function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  var arr = obj[key];
  if(obj[key] && Array.isArray(arr)){
  return arr.reduce(function(acc,curr){
    if(curr === 10){
      acc.push(10);
      return acc;
    }
    return acc;
  },[]);}
  return [];
}
