function calcular(){

    var num1 = parseInt (document.getElementById("numero1").value);
    var num2 = parseInt (document.getElementById("numero2").value);
   /* var operacao = document.getElementById("operacao").value;

     if( operacao == "+")
        document.getElementById("resultado").value = num1 + num2;
    if( operacao == "-")
        document.getElementById("resultado").value = num1 - num2;
    if( operacao == "/")
        document.getElementById("resultado").value = num1 / num2;
    if( operacao == "*")
        document.getElementById("resultado").value = num1 * num2;
 */
    switch(document.getElementById("operacao").value){
        case "+": document.getElementById("resultado").value = num1 + num2; break;
        case "-": document.getElementById("resultado").value = num1 - num2; break;
        case "/": document.getElementById("resultado").value = num1 / num2; break;
        case "*": document.getElementById("resultado").value = num1 * num2; break;
    }
}

