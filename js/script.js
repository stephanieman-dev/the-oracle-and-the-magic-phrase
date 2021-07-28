// Get the magic button
var generateBtn = document.querySelector("#magic-btn");

// Attach event listener to the magic button
generateBtn.addEventListener("click", displayMagicPhrase);

// Create array
var phrasesArray = [
  "Your future is doomed, but hey, you can always try again",
  "Something amazing is coming your way tomorrow",
  "You will have a long and happy life",
  "You will be attacked by a fluffy bunny."
];

function displayMagicPhrase() {

  var magicPhrase = makeSomeMagic();
  var magicPhraseDisplay = document.querySelector("#magic-phrase");
//  magicPhraseDisplay.value = "heyaaa";
  magicPhraseDisplay.value = magicPhrase;
  
}


// Get random item from array
function makeSomeMagic()
{
  var q1 = confirm("Do you want to make a snowman?");
  var q2 = confirm("Are you a happy person?");
  var q3 = confirm("Do you like rainbows?");


  if (q1 == true)
  {
    quote = "Yesss"
  }

  var magicPhrase = phrasesArray[ 
    Math.floor(Math.random()*phrasesArray.length)
  ];

  return magicPhrase;
}


