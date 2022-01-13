let randomNumber = 0;
$(".play").click(function(){
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);
  
  
  randomNumber = Math.random();
   randomNumber = Math.random()*3;
   randomNumber = Math.ceil(randomNumber);
  $(".computerChoice").text(randomNumber)
  if (randomNumber  === 1) {
    $(".computerChoice").text ("Rock"); }
    if (randomNumber  === 2) {
    $(".computerChoice").text ("Paper"); }
    if (randomNumber  === 3) {
    $(".computerChoice").text ("Scissors"); }
  

})
let result = "";
function compare(UserChoice, computerChoice) {
    if (UserChoice === 1 && computerChoice === 1) {
        return "Tie";
    }
    else if (UserChoice === 1 && computerChoice === 2) {
        return "Computer wins";
    }
    else if (UserChoice === 1 && computerChoice === 3) {
        return "User wins";
    }
  else if (UserChoice === 2 && computerChoice === 1) {
        return "User wins";
  }
  else if (UserChoice === 2 && computerChoice === 2) {
        return "Tie"
  }
  else if (UserChoice === 2 && computerChoice === 3) {
        return "Computer wins";
  }
  else if (UserChoice === 3 && computerChoice === 1) {
        return "User wins";
}
  else if (UserChoice === 3 && computerChoice === 2) {
        return "User wins";
  }
  else if (UserChoice === 3 && computerChoice === 3) {
        return "User wins";
}
  
  $
  $(".input").val("");
  
  
  
  
}