// Get the magic button
var generateBtn = document.querySelector("#magic-btn");

// Attach event listener to the magic button
generateBtn.addEventListener("click", displayMagicPhrase);

// Create questions array
var questionsArray = [
  "Do I like to do sports?",
  "Do I like to make puzzles?",
  "Do I like pets?",
  "Do I like pizza",
  "Do I like to draw or to read?"
]

// Create phrases array
var phrasesArray = [
  "Your future is doomed, but hey, you can always try again",
  "Something amazing is coming your way tomorrow",
  "You will have a long and happy life",
  "You will be attacked by a fluffy bunny."
];

function displayMagicPhrase() {
  
  var magicPhrase = makeSomeMagic();
  var magicPhraseDisplay = document.querySelector("#magic-phrase");
  magicPhraseDisplay.value = magicPhrase;
  
}


// Get random item from array
function makeSomeMagic(){
  
  for (let question of questionsArray)
  {
    confirm(question);
  } 

  const magicPhrase = phrasesArray[Math.floor(Math.random() * phrasesArray.length)];
  return magicPhrase;

}


