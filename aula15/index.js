/* /* var idade = parseInt(prompt("Insira sua idade"));

if(idade >= 18) 
{
    documet.write("Você é maior de idade")
} 
else 
{
    document.write("Você não é maior de idade.")
} */

/* var num1 = 10;
var num2 = 10;
document.writeln(num1 == num2);
document.writeln("<br>", num1 != num2);
document.writeln("<br>", 1 == "1");
document.writeln("<br>", 1 === "1"); 

var idade = parseInt(prompt("Insira sua idade: "));
var temCarteira = true;

if (idade >= 18 && temCarteira){
    document.write("Pode dirigir");
}else {
        document.write("Proibido dirigir");
    }

var i; 
for (i = 0; i < 10; i++)
document.write("<br> Valor de I: ", i)

 var frutas = ["Maçã","Banana","Laranja","Pera","Manga"]

for (i = 0; i < frutas.length;i ++){
    document.write("<br>Valor do array de frutas: ", i)
} */

/*FUNÇÃO*/

function exibemensage(){
    alert(msg);
}

exibemensage("Teste");
exibemensage("Fim");