function transformEmployeeData(array) {
  // your code here
  var ret = array.map(function(item){
    var t = item.reduce(function(prev,curr){
      prev[curr[0]]=curr[1];
      return prev;
    },{});
    return t;
  });
  return ret;
}

transformEmployeeData([
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]);
