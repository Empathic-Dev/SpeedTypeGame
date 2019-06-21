window.addEventListener('load', init);

// global var
let time = 5;
let score = 0;
let isPlaying; // when the player is typing: true, when the player wins/looses: false

// dom elements
const currentWord = document.querySelector('#current-word');
const wordInput = document.querySelector('#word-input');
const message = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//Initialize Game
function init(){
  console.log('Stay Focused, You Got This! I love you!!');
  // load random word from array
  showWord(words)
}

// pick & show random word
function showWord(words){
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];
}