// Get the magic button
var generateBtn = document.querySelector("#magic-btn");

// Attach event listener to the magic button
generateBtn.addEventListener("click", displayMagicPhrase);

function displayMagicPhrase() {
  
  var magicPhrase = makeSomeMagic();
  var magicPhraseDisplay = document.querySelector("#magic-phrase");
  magicPhraseDisplay.value = magicPhrase;
  
}

// Get magic phrase
function makeSomeMagic(){
  
  const likeSports = confirm("Do you like to do sports?");
  const likePuzzles = confirm("Do you like to make puzzles?");
  const likePets = confirm("Do you like pets?");
  const likePizza = confirm("Do you like pizza?");

  if (likeSports == true && likePuzzles == true && likePets== true && likePizza == true)
  {
     return "Your future as a developer will be full of sunshine and rainbows :)"
  }
  else{
    return "Your future is doomed.  But hey, you can always try again :)";
  }


}


