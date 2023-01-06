const inputMessage = document.getElementById('input-message');
const outputMessage = document.getElementById('output-message');
const img = outputMessage.querySelector('img');
let message = document.createTextNode('ingrese el texto aquí');
const encryptBtn = document.getElementById('encrypt-button');
const decryptBtn = document.getElementById('decrypt-button');

inputMessage.appendChild(message);
