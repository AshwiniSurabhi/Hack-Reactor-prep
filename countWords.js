function countWords(str) {
  // your code here
  var arr = str.split(" ");
  if(str.length>0){
  return arr.reduce(function(prev,curr){
    prev[curr] = countCharacter(str,curr);
    return prev;
  },{});
  }
  else 
    return {};
  
}

function countCharacter(str, substr) {
  var arr = str.split(" ");
  return arr.reduce(function(prev,curr){
    if(curr === substr)
      return prev+1
    else
      return prev
  },0);
 
}
