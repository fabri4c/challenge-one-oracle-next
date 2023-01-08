const outputContainer = document.getElementById('aside-section__container');
const img = outputContainer.querySelector('img');
const outputTextareaContainer = document.getElementById(
  'output-textarea-container'
);
const inputTextarea = document.getElementById('input-textarea');
const outputTextarea = document.getElementById('output-textarea');
const key = 'my secret key';
const encryptBtn = document.getElementById('encrypt-button');
const decryptBtn = document.getElementById('decrypt-button');

inputTextarea.value = 'ingrese el texto aquí';
outputTextarea.value = 'Ingresa el texto que desees encriptar o desencriptar.';

encryptBtn.addEventListener('click', encryptMessage);
decryptBtn.addEventListener('click', decryptMessage);
