let btnSubmit = document.getElementById('submit');
let inputEmail = document.getElementById('inputEmail');
let inputPwd = document.getElementById('inputPassword');
let inputRem = document.getElementById('inputRemember');


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(inputEmail.value);
    console.log(inputPwd.value);
    console.log(inputRem.checked);
});