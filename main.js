var affirmation = document.querySelector('#affirmation');
var mantra = document.querySelector('#mantra');

var receiveMsgBtn = document.querySelector('#receive-message-btn');
var meditatingIcon = document.querySelector('#meditating-icon');
var messageBox = document.querySelector('#message-box');
var message = document.querySelector('#message');
var clearMsgBtn = document.querySelector('#clear-message-btn');
var body = document.querySelector('body');

receiveMsgBtn.addEventListener('click', showRandomMessage);
clearMsgBtn.addEventListener('click', clearMessage);

var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showRandomMessage() {
  event.preventDefault();
  if (affirmation.checked === true) {
    messageBox.innerText = affirmations[getRandomIndex(affirmations)];
    body.classList.add('affirmation-background');
  } else if (mantra.checked === true) {
    messageBox.innerText = mantras[getRandomIndex(mantras)];
    body.classList.add('mantra-background');
  }
  //when toggling back to affirmation from mantra, background does not change color.

  //CSS Message box changes size when toggling between message and meditating icon.
};

function clearMessage() {
  messageBox.innerHTML = '<img src="assets/meditate.svg" id="meditating-icon" alt="meditating person"/>';
};
