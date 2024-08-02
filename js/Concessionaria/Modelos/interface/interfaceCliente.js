import { Interface } from "../BD/BD.js";
import { Veiculo } from "../Entidades/Veiculo.js";
import { Cliente } from "../Entidades/Cliente.js";
import { validarNome, validarDataNascimento, validarQuilometragem, validarDiaria, validarModelo, validarAnoFabricação } from "../../../Script.js";
const itensLista = document.getElementById("resposta");
const itensListaVeiculo = document.getElementById("respostaVeiculo");

export class InterfaceCliente{
    constructor(){
        this.interface = new Interface();
    }

    enviarDadosVeiculo(dados){

        let modeloError = document.getElementById("ModeloError");
        let corError = document.getElementById("corError");
        let tipoError = document.getElementById("tipoError");
        let placaError = document.getElementById("placaError");
        let anoError = document.getElementById("anoError");
        let diariaError = document.getElementById("diariaError");
        let quilometragemError = document.getElementById("quilometragemError");
        modeloError.innerHTML = "";
        corError.innerHTML = "";
        tipoError.innerHTML = "";
        placaError.innerHTML = "";
        anoError.innerHTML = "";
        diariaError.innerHTML = "";
        quilometragemError.innerHTML = "";
        try {
            this.interface.verificarPlaca(dados.placa)
        } catch (error) {
            placaError.innerHTML = error.mensagem;
        }
        try {
            this.validarModelo(dados.modelo)
        } catch (error) {
            modeloError.innerHTML = error.mensagem;
        }
        try {
            this.validarDiaria(dados.valor_diaria)
        } catch (error) {
            diariaError.innerHTML = error.mensagem;
        }
        try {
            this.validarQuilometragem(dados.quilometragem)
        } catch (error) {
            quilometragemError.innerHTML = error.mensagem;
        }
        try {
            this.validarDataFabricacao(dados.ano_fabricacao)
        } catch (error) {
            anoError.innerHTML = error.mensagem;
        }
        if (placaError.innerHTML === "") {
            
            if (modeloError.innerHTML === "") {
            
                if (diariaError.innerHTML === "") {
            
                    if (quilometragemError.innerHTML === "") {
                        
                        if (anoError.innerHTML === "") {
                            
                            const veiculo = new Veiculo(dados);
                            this.interface.Adicionar(veiculo);
                            console.log(this.interface.ListarVeiculos())
                            this.atualizarVeiculosLista();    
                    
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
        
        nomeError.innerHTML = error.mensagem
       }
       try {

        this.validarCpf(dados.cpf)
       } catch (error) {
      
        cpfError.innerHTML = error.mensagem
       }
       try {
        this.validarDataNascimento(dados.Data_nascimento)
       } catch (error) {
       
        dataError.innerHTML = error.mensagem
       }
       console.log(dataError.innerHTML)
       console.log(nomeError.innerHTML)
       console.log(cpfError.innerHTML)
       if(dataError.innerHTML === ""){

        if(nomeError.innerHTML === ""){
        
            if(cpfError.innerHTML ===""){
                
                const cliente = new Cliente(dados);
                this.interface.Adicionar(cliente);
                this.atualizarLista()
            
                }
            }
        }
    }   
    atualizarVeiculosLista(){
        itensListaVeiculo.innerHTML = "";
        let veiculos = this.interface.ListarVeiculos();
        veiculos.forEach((item,index) => {
            let itemLista = document.createElement("li");
            console.log(item)
            itemLista.textContent = `${index} ${item.tipoVeiculo} ${item.placa} ${item.modelo} ${item.Cor} ${item.quilometragem} ${item.valor_diaria} ${item.ano_fabricacao}`;
            itensListaVeiculo.appendChild(itemLista)
        });
    }
    atualizarLista(){
        itensLista.innerHTML = "";
        let clientes = this.interface.listarClientesBD();
        clientes.forEach((item,index) => {
            let itemLista = document.createElement("li");
           
            itemLista.textContent = `${index} ${item.Nome} ${item.CPF} ${item.data_nascimento}`;
            itensLista.appendChild(itemLista)
        });

    }
    validarDataFabricacao(dataFabricacao){return validarAnoFabricação(dataFabricacao);}

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
  
    
    btn.addEventListener("click",()=>{
    
        const dados = {
            nome : document.getElementById('nome').value,
            cpf : document.getElementById('cpf').value,
            Data_nascimento: document.getElementById('dataNasc').value
        }
        ic.enviarDados(dados);
    }); 

    btn_veiculo.addEventListener("click",()=>{
        const dados = {

            cor : document.getElementById("cor").value,
            placa : document.getElementById("placa").value,
            ano_fabricacao: document.getElementById("ano_fabricacao").value,
            quilometragem: document.getElementById("quilometragem").value,
            valor_diaria: document.getElementById("ValorDiaria").value,
            tipo_veiculo : document.getElementById("tipoVeiculo").value,
            modelo : document.getElementById("modelo").value
        
        }
        ic.enviarDadosVeiculo(dados);
        
    });

}

clienteInfo();