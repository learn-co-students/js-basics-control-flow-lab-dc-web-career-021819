// Write your code in this file!
function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do.";
  }

}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
//use a switch & relate it to customer tip amount


  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}




// switch (hunger) {
//     case 'light':
//         food = 'grapes';
//         break;
//     case 'moderate':
//         food = 'sushi';
//         break;
//     case 'famished':
//         food = 'lasagna';
//         break;
