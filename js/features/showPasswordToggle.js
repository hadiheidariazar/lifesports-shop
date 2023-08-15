const showPasswordToggle = document.querySelector('#password-icon')
const passwordInput = document.querySelector('#password-input')

showPasswordToggle.addEventListener('click', () => {

    showPasswordToggle.classList.toggle('bi-eye-slash-fill')
    showPasswordToggle.className === 'bi bi-eye-fill' ? passwordInput.type = 'text' : passwordInput.type = 'password'

})