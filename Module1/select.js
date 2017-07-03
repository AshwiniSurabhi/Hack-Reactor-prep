function select(arr, obj) {
  // your code here
  return arr.reduce(function(prev,curr){
    if(obj[curr])
      {
        prev[curr] = obj[curr];
        return prev;
      }
      return prev;
  },{});
}


var arr = ['a', 'c'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
