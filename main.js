var affirmation = document.querySelector('#affirmation');
var body = document.querySelector('body');
var clearMsgBtn = document.querySelector('#clear-message-btn');
var mantra = document.querySelector('#mantra');
var meditatingIcon = document.querySelector('#meditating-icon');
var message = document.querySelector('#message');
var messageBox = document.querySelector('#message-box');
var receiveMsgBtn = document.querySelector('#receive-message-btn');

clearMsgBtn.addEventListener('click', clearMessage);
receiveMsgBtn.addEventListener('click', showRandomMessage);

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

function clearMessage() {
  messageBox.innerHTML = '<img src="assets/meditate.svg" id="meditating-icon" alt="meditating person"/>';
  body.classList.remove('mantra-background');
  body.classList.remove('affirmation-background');
  clearMsgBtn.classList.add('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showRandomMessage() {
  if (affirmation.checked) {
    messageBox.innerHTML = `
      <h3 id="message">${affirmations[getRandomIndex(affirmations)]}</h3>
    `
    body.classList.add('affirmation-background');
    body.classList.remove('mantra-background');
    clearMsgBtn.classList.remove('hidden');
  } else if (mantra.checked) {
    messageBox.innerHTML = `
      <h3 id="message">${mantras[getRandomIndex(mantras)]}</h3>
    `
    body.classList.add('mantra-background');
    body.classList.remove('affirmation-background');
    clearMsgBtn.classList.remove('hidden');
  }
};
