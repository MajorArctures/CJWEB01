const container = document.querySelector('.container');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const movies = [
    '01Ponyo',
    '02SpiritedAway',
    '03HowlsMovingCastle',
    '04KikiDS',
    '05CastleintheSky',
    '06Totoro',
    '07Mononoke',
    '08Marnie',
    '09Nausicaa',
    '10OnlyYesterday',
];



const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let card01 = ''; 
let card02 = '';

const ChecarEndGame = () => {
    const cardsDesabilitados = document.querySelectorAll('.desabilitarCard');

    if(cardsDesabilitados.length == 20){
        setTimeout(() =>  {
            clearInterval(this.loop);
            alert('Parabéns!');
        },1200)
        
    }
}

const checarCards = () => {
    const movie01 = card01.getAttribute('datamovie');
    const movie02 = card02.getAttribute('datamovie');

    if (movie01 == movie02){
        
        card01.firstChild.classList.add('desabilitarCard');
        card02.firstChild.classList.add('desabilitarCard');  
        
        card01 = ''; 
        card02 = '';

        ChecarEndGame ();

    } else {
        setTimeout(() =>  {

            card01.classList.remove('revelarCarta');
            card02.classList.remove('revelarCarta');
            
            card01 = ''; 
            card02 = '';

        },1000)
 
    }
}
const revelarCarta = ({target}) => {
    if (target.parentNode.className.includes('revelarCarta')){
        return;
    }
    if(card01 == ''){
        target.parentNode.classList.add('revelarCarta')
        card01 = target.parentNode;
    } else if (card02 == ''){
        target.parentNode.classList.add('revelarCarta')
        card02 = target.parentNode;

        checarCards();
    }
}
const criarCarta = (movie) => {
    const card = createElement('div', 'cards');
    const front = createElement('div', 'face cardFront');
    const back = createElement('div', 'face cardBack');

    front.style.backgroundImage = `url(../img/cards/${movie}.png)`; 

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelarCarta);
    card.setAttribute('datamovie', movie);

    return card;
}

const carregarGame = () => {
    const duplicateMovies = [...movies, ...movies];

    const listaRandomica = duplicateMovies.sort( () => Math.random() - 0.5);


    listaRandomica.forEach((movie) => {
        const card = criarCarta(movie);
        container.appendChild(card);
    });
 }

 //função para o temporizador usando loop
const  startTimer = () => {
    this.loop = setInterval (() =>{
        //pega o valor atual do timer no html
        const tempoAtual = Number(timer.innerHTML);
        timer.innerHTML = tempoAtual + 1;
    },1000)
}

window.onload = () => {
    //quando a janela carregar vai executar 
    const playerName = localStorage.getItem('player');
    //pegar o nome armazenado e colocar no espaço do html
    spanPlayer.innerHTML = playerName;
    startTimer();
    carregarGame();
}

const resetGame = () =>{
    onload();
}

 
