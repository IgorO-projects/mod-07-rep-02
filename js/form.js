const formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', event => {
    event.preventDefault();
    
    const formElements = event.target.elements;

    const formData1 = {
        name: formElements.name.value, 
        email: formElements.email.value,
        password: formElements.password.value,
    };

    const formData2 = new FormData(formRef);

    const submittedData = {};

    formData2.forEach((value, key) => {
        console.log('value:', value);
        console.log('key:', key);

        submittedData[key] = value;
    })

    console.table(formData1); 
    console.table(submittedData);
})