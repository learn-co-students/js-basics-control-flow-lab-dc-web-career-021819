// Write your code in this file!

function scuberGreetingForFeet(ride){
  if (ride <= 400)
    return 'This one is on me!'
  else if (ride > 2000 && ride < 2499) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}
const local = 'NYC'
let city
function ternaryCheckCity(city){
  return (city === local? 'Ok, sounds good.' : 'No go.')
}


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
       return 'Thank you so much.'
      break;
    case 'not as generous':
       return 'Thank you.'
      break;
    default:
      return 'Bye.'
  }
}
