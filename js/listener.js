
const targetBtnRef = document.querySelector('.js-target-btn');
const addBtnListenerRef = document.querySelector('.js-add-listener');
const removeBtnListenerRef = document.querySelector('.js-remove-listener');

const greaterFn = (event) => {
    console.log('Hello World!');
    console.log(event.target);
}

addBtnListenerRef.addEventListener('click', () => {
    targetBtnRef.addEventListener('click', greaterFn);
});
removeBtnListenerRef.addEventListener('click', () => {
    targetBtnRef.removeEventListener('click', greaterFn);
});

