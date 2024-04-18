let entradaAtual = '';
let operacaoAtual = '';
let memoria = '';
let calcular = '';


function adicionaNumero(numero){
    entradaAtual += numero;
    attdisplay();
}

function attdisplay(){
    document.getElementById('display').value = entradaAtual;
}

function definirOperacao(operacao){
    if(entradaAtual != ''){
        if(memoria != '')
            {
                
            }
        operacaoAtual = operacao;
        memoria = entradaAtual;
        entradaAtual='';
        attdisplay();
    }
}

function calculaResultado(){
    if(entradaAtual !== '' && memoria !==''){
        let num1= parseFloat (memoria);
        let num2= parseFloat (entradaAtual);

        switch(operacaoAtual){
            case "+": entradaAtual = (num1 + num2); break;
            case "/": entradaAtual = (num1 / num2); break;
            case "*": entradaAtual = (num1 * num2); break;
            case "-": entradaAtual = (num1 - num2); break;
        }
        memoria = '';
        operacaoAtual = '';
        attdisplay();
    }
}

function limparDisplay(){
    entradaAtual = ''; 
    memoria = '';
    operacaoAtual = '';
    attdisplay();
}
