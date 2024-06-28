const container = document.querySelector('.container');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const musicbutton = document.querySelector('.music');
const audio = document.querySelector('audio');
const parabens = document.querySelector('.painelparabens');

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

const mostrarParabens = () => {
    parabens.style.display = 'block';
}

const esconderparabens = () =>{
    parabens.style.display = 'none';
}

//Ranking
//Salvar o tempo e player e alocar ambos no local storage
const salvarPlayerTime = (tempo) => {
    const playerName = localStorage.getItem('player');
    const resultado = { jogador: playerName, tempo: tempo };

    let resultados = JSON.parse(localStorage.getItem('resultados')) || [];
    resultados.push(resultado);
    localStorage.setItem('resultados', JSON.stringify(resultados));
}
//Fazer com que ambos apareçam na planilha de rank
//Atualizar conforme os players jogam
const atualizarRanking = () => {
    const resultados = JSON.parse(localStorage.getItem('resultados')) || [];

    //Ordenar resultados pelo menor tempo
    resultados.sort((a, b) => a.tempo - b.tempo);

    //Limpar tabela de ranking
    const tabelaRank = document.querySelector('.rankTable');
    //impede o cabeçalho de sumir
    while (tabelaRank.rows.length > 1) {
        tabelaRank.deleteRow(1);
    }

    // Adicionar resultados ordenados na tabela
    const limite = 10; //define que só terá 10 linhas na tabela ou seja, slice de 0 a 10
    resultados.slice(0, limite).forEach((resultado, index) => {
        const row = tabelaRank.insertRow();
        const cellPosicao = row.insertCell(0);
        const cellJogador = row.insertCell(1);
        const cellTempo = row.insertCell(2);

        cellPosicao.textContent = index + 1;
        cellJogador.textContent = resultado.jogador;
        cellTempo.textContent = resultado.tempo;
    });
}
//Função para musica
let playmusic = false; //Começa sem som, tem que clicar no botão!
musicbutton.addEventListener('click', function() {
    audio.volume = 0.3;
    if (playmusic) {
        audio.pause();
    } else {
        audio.play();
    }
    playmusic = !playmusic;
})

//Função para criar os elementos
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//Varíaveis que vão armazenar as cartas viradas
let card01 = ''; 
let card02 = '';

//Função que vai checar se o jogo foi terminado
const ChecarEndGame = () => {
    const cardsDesabilitados = document.querySelectorAll('.desabilitarCard');

    if (cardsDesabilitados.length == 20) {
        clearInterval(this.loop);
        salvarPlayerTime(Number(timer.innerHTML));
        atualizarRanking();
        mostrarParabens(); 
    }
}

//Vai checar se os cards são iguais comparando pelo nome dos itens na lista
const checarCards = () => {
    const movie01 = card01.getAttribute('datamovie');
    const movie02 = card02.getAttribute('datamovie');

    if (movie01 == movie02){
        //se forem iguai vai desabilitar ambos os cards
        card01.firstChild.classList.add('desabilitarCard');
        card02.firstChild.classList.add('desabilitarCard');  
        card01 = ''; 
        card02 = '';
        ChecarEndGame ();

    } else {
        //se forem diferentes vai virar as cartas de novo
        setTimeout(() =>  {
            card01.classList.remove('revelarCarta');
            card02.classList.remove('revelarCarta');
            card01 = ''; 
            card02 = '';
        },1000)
 
    }
}

//função que vai revelar as cardas
const revelarCarta = ({target}) => {
    if (target.parentNode.className.includes('revelarCarta')){
        return;
    }
    /*Ao clicar será capturada a informação do nome da carta (mesmo do array) e será adicionada a 
    classe revelar carta que permite a visualização da imagem na frente da carta*/
    if(card01 == ''){
        target.parentNode.classList.add('revelarCarta')
        card01 = target.parentNode;
    } else if (card02 == ''){
        target.parentNode.classList.add('revelarCarta')
        card02 = target.parentNode;
        checarCards();
    }
}

//Criação das cartas, mantém as cardback iguais e a frente das cartas diferentes
const criarCarta = (movie) => {
    const card = createElement('div', 'cards');
    const front = createElement('div', 'face cardFront');
    const back = createElement('div', 'face cardBack');

    front.style.backgroundImage = `url(../img/cards/${movie}.png)`; 

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelarCarta)
    card.setAttribute('datamovie', movie);

    return card;
}

//Carregar o jogo quando "play" for clicado
const carregarGame = () => {
    const duplicateMovies = [...movies, ...movies];

    //Fazer com que os alinhamentos de carta sejam diferentes
    const listaRandomica = duplicateMovies.sort( () => Math.random() - 0.5);
    listaRandomica.forEach((movie) => {
        const card = criarCarta(movie);
        container.appendChild(card);
    });
 }

 //Função para o temporizador usando loop
const  startTimer = () => {
    this.loop = setInterval (() =>{
        //Pega o valor atual do timer no html
        const tempoAtual = Number(timer.innerHTML);
        timer.innerHTML = tempoAtual + 1;
    },1000)
}

//Quando a janela carregar vai executar
window.onload = () => { 
    const playerName = localStorage.getItem('player');
    //Pegar o nome armazenado e colocar no espaço do html
    spanPlayer.innerHTML = playerName;
    startTimer();
    carregarGame();
    //Chamar a função de atualizar rank para mostrar quando a página carregar
    atualizarRanking();
}

const reiniciar = () => {
    // 1 - limpar o container
    container.innerHTML = '';
    // 2 - timer em 0
    timer.innerHTML = '0';
    // 3 - reiniciar o timer
    clearInterval(this.loop);
    startTimer();
    // 4 - novas cartas
    carregarGame();
    esconderparabens(); 
}
// Revelar todas as cartas e finalizar o game
const revelarCards = () => {
    const cards = document.querySelectorAll('.cards');
    cards.forEach(card => {
        card.classList.add('revelarCarta');
        card.classList.add('desabilitarCard');
    });
    ChecarEndGame();
}

// Para mudar o jogador 
const changePlayer = () => {
    window.location = '../index.html';
}

// Para revelar quando o botão for clicado
const gameEndButton = document.querySelector('.endGame');
gameEndButton.addEventListener('click', revelarCards);

 
//para limpar o ranking pós testes ou quando necessário
const limparRanking = () => {
    const tabelaRank = document.querySelector('.rankTable');
    // Remove as linhas
    while (tabelaRank.rows.length > 1) {
        tabelaRank.deleteRow(1);
        esconderparabens();
    }
    // Limpar o localStorage
    localStorage.removeItem('resultados');
   
};