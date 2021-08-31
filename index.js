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
  if (city === 'NYC') {
    return greeting = 'Ok, sounds good.';
  } else {
    return greeting = 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous') {
    return greeting = 'Thank you so much.';
  } else if (tip === 'not as generous') {
      return greeting = 'Thank you.';
  } else {
      return greeting = 'Bye.';
  }
}