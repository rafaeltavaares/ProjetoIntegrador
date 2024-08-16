import { Interface } from "../BD/BD.js";
import { Veiculo } from "../Entidades/Veiculo.js";
import { Cliente } from "../Entidades/Cliente.js";
import { locacao } from "../Entidades/Locacao.js";
import { validarNome, validarDataNascimento, validarQuilometragem, validarDiaria, validarModelo, validarAnoFabricacao } from "../../../Script.js";
const itensLista = document.getElementById("clientesList");
const itensListaVeiculo = document.getElementById("VeiculosList");
const formularioVeiculo = document.getElementById("formularioVeiculo")
const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const Data_nascimento= document.getElementById('dataNasc');

let placa = document.getElementById("placa");
let ano_fabricacao= document.getElementById("ano_fabricacao");
let quilometragem= document.getElementById("quilometragem");
let valor_diaria= document.getElementById("ValorDiaria");

let modelo = document.getElementById("modelo");
const itensLocacao = document.getElementById("VeiculosListAluguel")
const itensConsultaLocacao = document.getElementById("tabelaConsultaLocaçao")

export class InterfaceCliente{
    constructor(){
        this.interface = new Interface();
        this.veiculosAluguel = this.interface.ListarVeiculos();
    }

    enviarDadosVeiculo(dados){

        let modeloError = document.getElementById("ModeloError");
 
        let tipoError = document.getElementById("tipoError");
        let placaError = document.getElementById("placaError");
        let anoError = document.getElementById("anoError");
        let diariaError = document.getElementById("diariaError");
        let quilometragemError = document.getElementById("quilometragemError");
        modeloError.innerHTML = "";
       
        tipoError.innerHTML = "";
        placaError.innerHTML = "";
        anoError.innerHTML = "";
        diariaError.innerHTML = "";
        quilometragemError.innerHTML = "";
        try {
            this.interface.verificarPlaca(dados.placa)
        } catch (error) {
            placa.value = dados.placa;
            ano_fabricacao.value = dados.ano_fabricacao;
            quilometragem.value = dados.quilometragem;
            valor_diaria.value = dados.valor_diaria;
            modelo.value = dados.modelo;
            placaError.innerHTML = error.mensagem;
        }
        try {
            this.validarModelo(dados.modelo)
        } catch (error) {
            
            placa.value = dados.placa;
            ano_fabricacao.value = dados.ano_fabricacao;
            quilometragem.value = dados.quilometragem;
            valor_diaria.value = dados.valor_diaria;
            modelo.value = dados.modelo;
            modeloError.innerHTML = error.mensagem;
        }
        try {
            
            this.validarDiaria(dados.valor_diaria)
        } catch (error) {
            placa.value = dados.placa;
            ano_fabricacao.value = dados.ano_fabricacao;
            quilometragem.value = dados.quilometragem;
            valor_diaria.value = dados.valor_diaria;
            modelo.value = dados.modelo;
            diariaError.innerHTML = error.mensagem;
        }
        try {
            this.validarQuilometragem(dados.quilometragem)
        } catch (error) {
            placa.value = dados.placa;
            ano_fabricacao.value = dados.ano_fabricacao;
            quilometragem.value = dados.quilometragem;
            valor_diaria.value = dados.valor_diaria;
            modelo.value = dados.modelo;
            quilometragemError.innerHTML = error.mensagem;
        }
        try {
            console.log(dados.ano_fabricacao)
            this.validarDataFabricacao(dados.ano_fabricacao)
        } catch (error) {
            placa.value = dados.placa;
            ano_fabricacao.value = dados.ano_fabricacao;
            quilometragem.value = dados.quilometragem;
            valor_diaria.value = dados.valor_diaria;
            modelo.value = dados.modelo;
            anoError.innerHTML = error.mensagem;
        }
        if (placaError.innerHTML === "") {
            
            if (modeloError.innerHTML === "") {
            
                if (diariaError.innerHTML === "") {
            
                    if (quilometragemError.innerHTML === "") {
                        
                        if (anoError.innerHTML === "") {
                            
                            const veiculo = new Veiculo(dados);
                            this.interface.Adicionar(veiculo);
                        
                            window.alert("Cadastro Inserido!")
                        
                            this.atualizarVeiculosLista();  
                            this.atualizarLista();  
                            this.atualizarLocacao();
                    
                        }              
            
                    }
                }
            }
            
        }
 
    }

    enviarDados(dados){

        let nomeError = document.getElementById("nomeError");
        let dataError = document.getElementById("dataError");
        let cpfError = document.getElementById("cpfError");
        cpfError.innerHTML = "";
        dataError.innerHTML = "";
        nomeError.innerHTML = "";

       try {
        this.validarNome(dados.nome)
   
       } catch (error) {
        nome.value = dados.nome;
        cpf.value = dados.cpf;
        nomeError.innerHTML = error.mensagem
       }
       try {

        this.validarCpf(dados.cpf)
       } catch (error) {
        nome.value = dados.nome;
        cpf.value = dados.cpf;
        
        cpfError.innerHTML = error.mensagem
       }
       try {
        this.validarDataNascimento(dados.Data_nascimento)
       } catch (error) {
        dataError.innerHTML = error.mensagem
       }
       if(dataError.innerHTML === ""){

        if(nomeError.innerHTML === ""){
        
            if(cpfError.innerHTML ===""){
                
                const cliente = new Cliente(dados);
                this.interface.Adicionar(cliente);
                window.alert("Cadastro Inserido!")
                this.atualizarLista()
            
                }
            }
        }
    }   
    enviarDadosAluguel(dados){
        let aluguel = new locacao(dados);
        this.interface.ListarVeiculos()[dados.indexVeiculo].setIsAlugado(true);
        this.interface.Adicionar(aluguel);
        console.log(this.interface.listarLocacoes())
        this.atualizarLocacao();    
        this.atualizarConsultaLocacao();
    }
    atualizarConsultaLocacao(){
        itensConsultaLocacao.innerHTML = "";
        this.interface.listarLocacoes().forEach((item,index) =>{
            console.log("teste")

            let cliente = this.interface.listarClientesBD().find(cliente => cliente.CPF === item.indexCliente);
            let veiculo = this.interface.ListarVeiculos()[index];
            if(veiculo.getAlugado() === true){

                
                let formatado = cliente.CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
                let row = document.createElement('tr')
                 row.innerHTML = `
                 <td>${formatado}</td>
                 <td> ${cliente.Nome} </td>
                 <td>${veiculo.placa}</td>
                 <td> ${veiculo.modelo} </td>
                 <td>${veiculo.valor_diaria}</td>
                 <td> ${item.data} </td>
             `;   
                 console.log('teste')
    
                 let buttons = document.createElement('td')
                 let btnDevolver = document.createElement("button");
                 btnDevolver.textContent = 'Devolver';
                 btnDevolver.onclick = () => {
                    veiculo.setIsAlugado(false);
                    this.atualizarConsultaLocacao();
                    this.atualizarLocacao();
                    this.atualizarLista();
                 }
                 buttons.appendChild(btnDevolver);
                 row.appendChild(buttons);
                 itensConsultaLocacao.appendChild(row);
                
            }



        });
    }
    atualizarVeiculosLista(){
        itensListaVeiculo.innerHTML = "";
        let veiculos = this.interface.ListarVeiculos();
        veiculos.forEach((item,index) => {
           
           let row = document.createElement('tr')
           let placa_formatada = item.placa.replace(/([a-zA-Z]{3})(\d{4})/, "$1-$2");
            row.innerHTML = `
            <td>${placa_formatada}</td>
            <td> ${item.tipoVeiculo} </td>
            <td>${item.modelo}</td>
            <td> ${item.ano_fabricacao} </td>
            <td>${item.valor_diaria}</td>
            <td> ${item.quilometragem} </td>
        `;   
            let buttons = document.createElement('td')
            const btnEditar = document.createElement("button");
            btnEditar.textContent = 'Editar';
            btnEditar.onclick = () => {
            
            document.getElementById('veiculoConteiner').style.display = 'block';
            document.getElementById('consultaVeiculo').style.display = 'none';

            // Desabilita todos os campos exceto o campo "ValorDiaria"
            const inputs = document.querySelectorAll("#veiculoConteiner input");
            inputs.forEach((input) => {
                if (input.id !== 'ValorDiaria') {
                    input.disabled = true;
                } else {
                    // Preenche o campo "ValorDiaria" com o valor atual
                    input.value = item.valor_diaria;
                    input.disabled = false;
                }
            });

            // Configura o botão de salvar para atualizar o valor da diária
            const btnSalvar = document.getElementById('btnEnviarDadosVeiculo');
            btnSalvar.onclick = () => {
                const novoValorDiaria = document.getElementById('ValorDiaria').value;
                item.valor_diaria = novoValorDiaria;

                // Atualiza a lista de veículos com o novo valor da diária
                this.atualizarVeiculosLista();
                alert('Valor da diária atualizado com sucesso!');

                // Oculta o formulário de cadastro após a edição
                document.getElementById('veiculoConteiner').style.display = 'none';

                // Reativa os campos desativados
                inputs.forEach((input) => {
                    input.disabled = false;
                });
            };
            }
            
            const btnExcluir = document.createElement("button");
            btnExcluir.textContent = "Excluir";
            btnExcluir.onclick = () => {
                let item = veiculos[index];
                const confirmacao = confirm(`Deseja realmente excluir o veiculo da placa: "${item.placa}"?`);
        
                if (!confirmacao) {
                    return;
                }
                this.interface.excluir("veiculo",index);
                this.atualizarVeiculosLista();
            };
            btnEditar.classList.add('btnAcoes')
            btnExcluir.classList.add('btnAcoes')
            buttons.appendChild(btnEditar);
            buttons.appendChild(btnExcluir);
            row.appendChild(buttons)
            itensListaVeiculo.appendChild(row)
        });
    }

    atualizarLista() {
        itensLista.innerHTML = "";
    
        // Verificar se há veículos disponíveis para locação
        let veiculosDisponiveis = this.interface.ListarVeiculos().some(veiculo => veiculo.getAlugado() === false);
  
        let clientes = this.interface.listarClientesBD();
        clientes.forEach((item, index) => {
            let formatado = item.CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            let data_formatada = item.data_nascimento.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
            let row = document.createElement("tr");
    
            row.innerHTML = `
                <td>${formatado}</td>
                <td>${item.Nome}</td>
                <td>${data_formatada}</td>
            `;
    
            let buttons = document.createElement('td');
    
            // Botão de excluir
            const btnExcluir = document.createElement("button");
            btnExcluir.textContent = "Excluir";
            btnExcluir.classList.add('btnAcoes');
            btnExcluir.onclick = () => {
                let item = clientes[index];
                const confirmacao = confirm(`Deseja realmente excluir a pessoa do CPF: "${item.CPF}"?`);
                if (!confirmacao) return;
    
                this.interface.excluir("cliente", index);
                this.atualizarLista();
            };
    
            // Botão de alugar
            const btnAlugar = document.createElement("button");
            btnAlugar.textContent = "Alugar";
            btnAlugar.classList.add('btnAcoes');
    
            
            // Verificar disponibilidade de veículos
            if (!veiculosDisponiveis) {
                btnAlugar.disabled = true;
                btnAlugar.style.backgroundColor = 'gray'; // Estilo para botão desabilitado
            } else {
                btnAlugar.disabled = false;
                btnAlugar.style.backgroundColor = ''; // Resetar estilo para o botão habilitado
            }
    
            btnAlugar.onclick = () => {
                document.getElementById('alugarVeiculo').style.display = 'block';
                document.getElementById('consulta').style.display = 'none';
                let infocpf = document.getElementById('AlugarCPFCliente');
                let infonome = document.getElementById('AlugarNomeCliente');
                infocpf.textContent = "CPF: " + item.CPF;
                infonome.textContent = "Nome: " + item.Nome;
                this.atualizarLista();
            };
    
            // Adicionar botões à linha
            buttons.appendChild(btnAlugar);
            buttons.appendChild(btnExcluir);
            row.appendChild(buttons);
            itensLista.appendChild(row);
        });
    }


    atualizarLocacao() {

        itensLocacao.innerHTML = '';
    
        
        this.interface.ListarVeiculos().forEach((item, index) => {
            if(item.getAlugado() === false) {
 
                let row2 = document.createElement("tr");
    
              
                let placa_formatada = item.placa.replace(/([a-zA-Z]{3})(\d{4})/, "$1-$2");
    
          
                row2.innerHTML = `
                    <td><input type="radio" name="veiculo" value="${index}"></td>
                    <td>${placa_formatada}</td>
                    <td>${item.tipoVeiculo}</td>
                    <td>${item.modelo}</td>
                    <td>${item.ano_fabricacao}</td>
                    <td>${item.valor_diaria}</td>
                    <td>${item.quilometragem}</td>
                `;
                
                itensLocacao.appendChild(row2);
            }
        });
    }
 

    validarDataFabricacao(dataFabricacao){return validarAnoFabricacao(dataFabricacao);}

    validarDiaria(valor_diaria){return validarDiaria(valor_diaria);}

    validarQuilometragem(quilometragem){return validarQuilometragem(quilometragem);}

    validarModelo(modelo){return validarModelo(modelo);}
    
    validarNome(nome){return validarNome(nome);}

    validarCpf(cpf){return this.interface.verificarCPF(cpf);}

    validarDataNascimento(data_nascimento){return validarDataNascimento(data_nascimento);}

}
function clienteSetup(){return new InterfaceCliente();}



function clienteInfo(){
    const ic = clienteSetup();
    const btn = document.getElementById("btnEnviarDadosCliente");
    const btn_veiculo = document.getElementById("btnEnviarDadosVeiculo");
    const btn_locacao = document.getElementById("btnEnviarLocacao");

    btn_locacao.addEventListener("click", ()=>{
        try{
            let veiculoSelecionado = document.querySelector('input[name="veiculo"]:checked').value
            let cliente = document.getElementById("AlugarCPFCliente").innerText;
            const cpfLimpo = cliente.replace(/[^\d]/g, '');
            console.log(veiculoSelecionado)
            console.log(cpfLimpo)
            const dados = {
                indexVeiculo: veiculoSelecionado,
                cpfCliente: cpfLimpo
            }
            ic.enviarDadosAluguel(dados);
        }catch (error){
            window.alert("selecione alguma coisa")
        }

    })
    
    btn.addEventListener("click",()=>{

        const dados = {
            nome : nome.value,
            cpf : cpf.value,
            Data_nascimento: Data_nascimento.value
        }
        nome.value = ''
        cpf.value = ''
        ic.enviarDados(dados);
        
    }); 

    btn_veiculo.addEventListener("click",()=>{

        const dados = {
            placa : placa.value,
            ano_fabricacao: ano_fabricacao.value,
            quilometragem: quilometragem.value,
            valor_diaria: valor_diaria.value,
            tipo_veiculo: document.querySelector('input[name="tipodeveiculo"]:checked').value,
            modelo : modelo.value
        }
            quilometragem.value = ''
            placa.value = ''
            ano_fabricacao.value = ''
            valor_diaria.value = ''
            modelo.value = ''
        ic.enviarDadosVeiculo(dados);
    });

    document.getElementById("label-cpf").addEventListener("click", function() {
    
        var tabela = document.getElementById("tabelaClientes").getElementsByTagName("tbody")[0];
        var linhas = Array.from(tabela.getElementsByTagName("tr"));
    
        linhas.sort(function(a, b) {
            var cpfA = a.getElementsByTagName("td")[0].textContent;
            var cpfB = b.getElementsByTagName("td")[0].textContent;
    
            return cpfA.localeCompare(cpfB);
        });
    
        linhas.forEach(function(linha) {
            tabela.appendChild(linha);
        });
    });

    document.getElementById("label-nome").addEventListener("click", function() {
        var tabela = document.getElementById("tabelaClientes").getElementsByTagName("tbody")[0];
        var linhas = Array.from(tabela.getElementsByTagName("tr"));
    
        linhas.sort(function(a, b) {
            var nomeA = a.getElementsByTagName("td")[1].textContent.toLowerCase();
            var nomeB = b.getElementsByTagName("td")[1].textContent.toLowerCase();
    
            return nomeA.localeCompare(nomeB);
        });
    
        linhas.forEach(function(linha) {
            tabela.appendChild(linha);
        });
    });




}

clienteInfo();