let greeting;
function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return greeting = 'This one is on me!';
  } else if (feet > 2000 && feet < 2499) {
      return greeting = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    return greeting = 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  
    return (city === 'NYC'? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  //const tip = 'generous';
  switch (tip) {
    case 'generous' :
      return `Thank you so much.`;
      break;
    case 'not as generous' :
      return `Thank you.`;
      break;
    default: 
      return `Bye.`;
  }
    
}