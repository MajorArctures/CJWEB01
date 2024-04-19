//Função para preencher de conteúdo a div
function botaoclidado(){
    document.getElementById('conteudo').innerText += "Botão Clicado!\n";
}
//Cadastrar evento ao botão
document.getElementById('botao').addEventListener("click", botaoclidado);

//Exemplo 02

function divMouseOver (){
    document.getElementById('hover').style.backgroundColor = 'lightgray';
}

//Add evento mouseover a div
document.getElementById('hover').addEventListener("mouseover", divMouseOver);



function divMouseOut (){
    document.getElementById('hover').style.backgroundColor = '#E0218A';
}
//Add evento mouseover a div
document.getElementById('hover').addEventListener("mouseout", divMouseOut);

//Mudar a cor ao double click
function doubleclick(){
    document.getElementById('hover').style.color = 'black';
}

//Add evento de doubleclik
document.getElementById('hover').addEventListener("dblclick", doubleclick);

//Eventos do forms
//Função para escrever no paragrafo o que tem no campo, enquanto o dado estiver mudando!
function campoInputMudou(){
    let valor = document.getElementById('nome').value;
    
    document.getElementById('valorDoCampo').innerText = "Valor do campo: " + valor;
}

document.getElementById('nome').addEventListener("input", campoInputMudou);

//EXEMPLO 03
//Função para alterar o tema da tela
function toggleDarkMode(){
    document.body.classList.toggle("darkMode");
}
//Cadastrar evento ao botão
document.getElementById('alternarModo').addEventListener("click", toggleDarkMode);
