function countAllCharacters(str) {
  // your code here
  var arr=str.split('');
  return arr.reduce(function(prev,curr){
    if(prev[curr])
      {
        prev[curr]++;
        return prev;
      }
      prev[curr] = 1;
      return prev;
  },{});
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
