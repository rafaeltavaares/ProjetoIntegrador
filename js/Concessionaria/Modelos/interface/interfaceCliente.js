import { cadastroClienteException } from "../../infra/cadastroClienteException";
import { Cliente } from "../Cliente";
import { Interface } from "./InterfaceBd";

function coletar(){
    const ic = new InterfaceCliente();
    console.log(ic.coletarDados())
}

 class InterfaceCliente{
    constructor(){
        this.interface = new Interface();
    }
    coletarDados(){
        const nomePuro = document.getElementById('nome').value
        this.validarNome(nomePuro);
        
        
        const dados = {
            nome : document.getElementById('nome').value,
            usuario: document.getElementById('usuario').value,
            cpf : document.getElementById('cpf').value,
            Data_nascimento: document.getElementById('dataNasc').value
        }
        enviarDados(dados);
    }
    enviarDados(dados){
        const cliente = new Cliente(dados);
        this.interface.AdicionarCliente(cliente);
    }   
    
    validarNome(nome){
        if(nome.lenght >=4 && nome.lenght <=80)
            return true;
        return false;       
    }
    validarCpf(cpf){
        this.interface.verificarCPF(cpf);
    }
    validarDataNascimento(data_nascimento){}

}