const input = document.querySelector('.nomeJogador');
const button = document.querySelector('.botaoLogin');
const form = document.querySelector('.loginForm');

const validarEntrada = ({ target }) => {
    if (target.value.length > 3) {
        button.removeAttribute('disabled');
    } else{
    button.setAttribute('disabled', '');
    }
}

const salvarEntrada = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validarEntrada);
form.addEventListener('submit', salvarEntrada);
    

