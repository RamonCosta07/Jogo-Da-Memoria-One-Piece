const input = document.querySelector('.login_input');
const button = document.querySelector('.submit_button');
const form = document.querySelector('.login-form');

// Target desestruturado do input
const validateInput = ({target}) => {
    if (target.value.length > 3) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    /* Local Storage é um armazenamento local
    do Browser, permitindo salvar dados no
    navegad0r */

    localStorage.setItem('player', input.value);
    // Redirecionar para nova página
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);