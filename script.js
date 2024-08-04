const email = document.getElementById('email');
const btn = document.getElementById('btn-input');
const errorMessage = document.getElementById('error-message');
const validEmail = "john@mail.com";


btn.addEventListener('click', (e) => {
    if(email.value !== validEmail) {
        e.preventDefault();
        errorMessage.textContent = 'Oops! Please check your mail';
        email.style.border = '1px solid #FB3E3E';
    }else {
        errorMessage.textContent = '';
        email.style.border = '';
    }
})



email.addEventListener('input', () => {
    errorMessage.textContent = '';
    email.classList.remove('error');
    email.style.border = '';
})