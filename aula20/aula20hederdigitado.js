    var cadastros = [];
        var edit = 0;
       function adicionarCadastro(){
            var nome = document.getElementById("nome").value;
            var email = document.getElementById("email").value;
            var telefone = document.getElementById("telefone").value;
            //console.log(nome + email + telefone);
            if (nome && email && telefone){
                var cadastro = {nome: nome, email: email, telefone:telefone};
                cadastros.push(cadastro);

                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("telefone").value = "";

                atualizaDataGrid();
            } else {
                alert("Todos os dados devem ser preenchidos!");
            }
        }

        function atualizaDataGrid(){
            var tbody = document.querySelector("#datagrid tbody");
            tbody.innerHTML = "";

            for (i = 0; i < cadastros.length; i++) {
                var cadastro = cadastros[i];

                var row = document.createElement("tr");
                var cellNome = document.createElement("td");
                var cellEmail = document.createElement("td");
                var cellTelefone = document.createElement("td");

                cellNome.textContent = cadastro.nome;
                cellEmail.textContent = cadastro.email;
                cellTelefone.textContent = cadastro.telefone;

                var cellAcoes = document.createElement("td");

                var botaoEditar = document.createElement("button");
                botaoEditar.textContent = "Editar";
                botaoEditar.onclick = criarEditarHandler(i);
                
                //botaoEditar.onclick = handlerEditar(i);
                //botaoEditar.id = "edit"+i;

                var botaoExcluir = document.createElement("button");
                botaoExcluir.textContent = "Excluir";
                botaoExcluir.onclick = handlerExcluir(i);

                cellAcoes.appendChild(botaoEditar);
                cellAcoes.appendChild(botaoExcluir);

                row.appendChild(cellNome);
                row.appendChild(cellEmail);
                row.appendChild(cellTelefone);
                row.appendChild(cellAcoes);

                tbody.appendChild(row);
            }
        }

        function criarEditarHandler(index){
            return function(){
                editarCadastro(index);
            }
        }

        function editarCadastro(index){
            var linha = document.querySelector("#datagrid tbody tr:nth-child(" + (index + 1) +")");
            if(linha){
                var celulas = linha.querySelectorAll("td");
                
                for(var i = 0; i < celulas.length - 1; i++){
                    var valorAtual = celulas[i].textContent;
                    var input = document.createElement("input");
                    input.type = "text";
                    input.value = valorAtual;

                    celulas[i].textContent = "";
                    celulas[i].appendChild(input);
                }
                var botaoSalvar = document.createElement("button");
                botaoSalvar.textContent = "Salvar";
                botaoSalvar.onclick = function(){
                    salvarEdicao(index);
                };

                celulas[celulas.length - 1].innerHTML = "";
                celulas[celulas.length - 1].appendChild(botaoSalvar);


            }
        }

        function salvarEdicao(index){
            var linha = document.querySelector("#datagrid tbody tr:nth-child(" + (index + 1) +")");
            if(linha){
                var celulas = linha.querySelectorAll("td");
                console.log(celulas);
                cadastros[index].nome = celulas[0].querySelector("input").value;
                cadastros[index].email = celulas[1].querySelector("input").value;
                cadastros[index].telefone = celulas[2].querySelector("input").value;
                atualizaDataGrid();
            }

        }


        // function handlerEditar(index){
        //     return function(){
        //         editarCadastro(index);
        //     };
        // }
        // function editarCadastro(index){
        //     if (edit === 0){
        //         document.getElementById("nome").value = cadastros[index].nome;
        //         document.getElementById("email").value = cadastros[index].email;
        //         document.getElementById("telefone").value = cadastros[index].telefone;
        //         document.getElementById("edit"+index).textContent = "Salvar";
        //         edit = 1;                
        //     } else {
        //         cadastros[index].nome = document.getElementById("nome").value;
        //         cadastros[index].email = document.getElementById("email").value;
        //         cadastros[index].telefone = document.getElementById("telefone").value;
        //         document.getElementById("nome").value = "";
        //         document.getElementById("email").value = "";
        //         document.getElementById("telefone").value = "";
        //         edit = 0;
        //         document.getElementById("edit"+index).textContent = "Editar ";
        //         atualizaDataGrid();
        //     }
        // }
        function handlerExcluir(index){
            return function(){
                excluirCadastro(index);
            };
        }
        function excluirCadastro(index){
            cadastros.splice(index, 1);
            atualizaDataGrid();
        }