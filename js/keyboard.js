//отлавливает действие на целом окне браузера и выводит результат в консоль.
// window.addEventListener('keydown', event => {
// console.log('event.key:', event.key); 
// console.log('event.code:', event.code); 

// if(event.code === 'KeyG') {
//     console.log('you found this point G =D');
// }
// });

//отлавливает действие на целом окне браузера и выводит результат в тег <p> в <div> KeyEvents
const outputRef = document.querySelector('.js-output');
const clearBtnRef = document.querySelector('.js-clear-btn');

window.addEventListener('keypress', onKeyPress);
clearBtnRef.addEventListener('click', onClearBtn);

function onKeyPress () {
    outputRef.textContent += event.key;
};
function onClearBtn () {
    outputRef.textContent = '';
};