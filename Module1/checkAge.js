function checkAge(name, age) {
  // your code here
  var msg = "";
  if(age<21)
    return "Go home, "+name+"!";
  else 
    return "Welcome, "+name+"!";
}

console.log(checkAge('ash',21));
