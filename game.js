
const gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
const randomChosenColour = buttonColors[randomNunber];
gamePattern = [].push(randomChosenColour);

function nextSequence(){
  let randomNunber = Math.random()  * 4;
  console.log(randomNunber); 

  rand = Math.floor(randomNunber); 

  return rand;
}
nextSequence(1);
nextSequence(4);