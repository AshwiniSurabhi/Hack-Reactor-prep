var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
	
  // your code here
  for(var key in customerData){
    if(key === firstName){
      if(customerData[key].visits == 1)
        greeting = "Welcome back, "+firstName+"! We're glad you liked us the first time!"
      if(customerData[key].visits > 1)
        greeting = "Welcome back, "+firstName+"! So glad to see you again!";
    
      
   }
  }
  if(greeting === '')
    greeting = "Welcome! Is this your first time?";
  return greeting;

  
}

	


greetCustomer('Joe');
