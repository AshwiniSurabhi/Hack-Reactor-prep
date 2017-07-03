function fromListToObject(array) {
  
 obj = array.reduce(function(prev,item){
  prev[item[0]]=item[1];
  return prev;
 },{});
 return obj;
}

console.log(fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]));
