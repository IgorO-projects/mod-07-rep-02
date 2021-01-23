const inputRef = document.querySelector('.js-input');
const nameLabelRef = document.querySelector('.js-button > span');
const licenseRef = document.querySelector('.js-license');
const btnRef = document.querySelector('.js-button');

inputRef.addEventListener('input', handleInputChange);
licenseRef.addEventListener('change', handleLicenseChange);
inputRef.addEventListener('focus', handleFocus);
inputRef.addEventListener('blur', handleBlur);

function handleInputChange(event) {
    nameLabelRef.textContent = event.target.value;
};
function handleLicenseChange(event) {
    console.log('В здесь не обходимо оставить событие(event) как "change"');
    console.log(event);
    btnRef.disabled = !event.target.checked;
};
function handleFocus () {
    console.log('Инпут получает фокус');
};
function handleBlur () {
    console.log('Инпут теряет фокус');
}; 

// inputRef.addEventListener('change', event => {
//     nameLabelRef.textContent = event.target.value;
// });
// inputRef.addEventListener('input', event => {
//     nameLabelRef.textContent = event.target.value;
// });

// licenseRef.addEventListener('click', event => {
//     console.log(event);

//     btnRef.disabled = !event.target.checked;
// });

// inputRef.addEventListener('focus', () => {
//     console.log('Инпут получает фокус');
// });
// inputRef.addEventListener('blur', () => {
//     console.log('Инпут теряет фокус');
// });
