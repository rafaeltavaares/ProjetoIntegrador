import { Interface } from "../BD/BD";
import { Cliente } from "../Entidades/Cliente";


const btn = document.getElementById("btnEnviarDadosCliente");
btn.addEventListener("click",()=>{
    console.log("estou aqui")
    const ic = new InterfaceCliente();
    console.log("aqui")
    //console.log(ic.coletarDados())

}); 


class InterfaceCliente{
    constructor(){
        this.interface = new Interface();
    }
    coletarDados(){
        const nomePuro = document.getElementById('nome').value
        
        const dados = {
            nome : nomePuro,
            usuario: document.getElementById('usuario').value,
            cpf : document.getElementById('cpf').value,
            Data_nascimento: document.getElementById('dataNasc').value
        }
        enviarDados(dados);
    }
    enviarDados(dados){
        const cliente = new Cliente(dados);
        this.interface.AdicionarCliente(cliente);
        console.log(this.interface.listarClientesBD());
    }   
    
    validarNome(nome){
        if(nome.lenght >=4 && nome.lenght <=80)
            return true;
        return false;       
    }
    validarCpf(cpf){
        this.interface.verificarCPF(cpf);
    }
    validarDataNascimento(data_nascimento){

    }

}