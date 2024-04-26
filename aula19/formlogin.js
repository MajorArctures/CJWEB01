//Função para verificar os requisitos
function verificarSenha(){
    let senhaValida=true;
    senha=document.getElementById("senha").value;
    //Verifica enquanto a senha é alterada/digitada
    if (senha.length >= 8){
        document.getElementById("regra1").classList.add("valid"); 
    } else{
        document.getElementById("regra1").classList.remove("valid");
        document.getElementById("regra1").classList.add("error");
        senhaValida = false;
    }
   

    //Verificar letra maiúscula
    if (/[A-Z]/.test(senha)){
        document.getElementById("regra2").classList.add("valid");
    } else{
        document.getElementById("regra2").classList.remove("valid");
        document.getElementById("regra2").classList.add("error");
        senhaValida=false;
    }


    if (/[/!@#$%¨&*+-]/.test(senha)){
        document.getElementById("regra3").classList.add("valid");
    } else{
        document.getElementById("regra3").classList.remove("valid");
        document.getElementById("regra3").classList.add("error");
        senhaValida=false;
    }
    return senhaValida;
}
    function verificaForm(){
        if(!verificarSenha()){
            event.preventDefault();
        }
    }


    //input
    document.getElementById("senha").addEventListener("input",verificarSenha);
    document.getElementById("formularioLogin").addEventListener("submit",verificaForm);
    
    

