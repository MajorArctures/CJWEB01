/* var idade = parseInt(prompt("Insira sua idade"));

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
document.writeln("<br>", 1 === "1"); */

var idade = parseInt(prompt("Insira sua idade: "));
var temCarteira = true;

if (idade >= 18){
    document.write("Pode dirigir");
}else {
        document.write("Proibido dirigir");
    }