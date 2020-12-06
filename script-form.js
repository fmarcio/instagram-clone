//dark theme - select elements 
const toggle = document.getElementById('toggle');
const getAppText = document.querySelector('.get-app span');

//form validation - select elements
const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error-msg')

//dark theme - event listener
toggle.addEventListener('change', (e) => {
    //the toggle will be conditioned to e.target.checked
    document.body.classList.toggle('dark', e.target.checked);
    getAppText.classList.toggle('light-span', e.target.checked);
});

//form validation - event listener
form.addEventListener('submit', (e) => {
    let messages = [];
    if (name.value.length < 5) {
        messages.push('Nome de usuário deve ter mais de 5 caracteres');
    };

    if (password.value === '' || password.value === null) {
        messages.push('Insira uma senha')
    }

    if (password.value.length <= 6) {
        messages.push('Senha deve ter mais de 6 caracteres');
    };

    if (password.value.length > 12) {
        messages.push('Senha deve ter menos de 12 caracteres');
    };

    if (password.value.includes('senha')) {
        messages.push(`Sua senha não pode conter a palavra "senha"`);
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.style.color = '#e31717';
        errorElement.style.margin = '10px 0';
        errorElement.innerText = messages.join('. ');
    }
})

