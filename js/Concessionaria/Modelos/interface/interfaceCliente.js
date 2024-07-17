import { Interface } from "../BD/BD.js";
import { Cliente } from "../Entidades/Cliente.js";
import { validarNome, validarDataNascimento } from "../../../Script.js";
class InterfaceCliente{
    constructor(){
        this.interface = new Interface();
    }

    enviarDados(dados){
        if(this.validarNome(dados.nome)){

            if(this.validarCpf(dados.cpf)){
                
                if(this.validarDataNascimento(dados.Data_nascimento)){
                    console.log("enviado")           
                    const cliente = new Cliente(dados);
                    this.interface.AdicionarCliente(cliente);
                    console.log(this.interface.listarClientesBD())
                
                }
            }
        }
    }   
    
    validarNome(nome){
        return validarNome(nome);
    }
    
    validarCpf(cpf){
       return this.interface.verificarCPF(cpf);
    }

    validarDataNascimento(data_nascimento){
        return validarDataNascimento(data_nascimento);
    }

}
function clienteSetup(){return new InterfaceCliente();}

function clienteInfo(){
    const ic = clienteSetup();
    const btn = document.getElementById("btnEnviarDadosCliente");
    btn.addEventListener("click",()=>{
        const dados = {
            nome : document.getElementById('nome').value,
            usuario: document.getElementById('usuario').value,
            cpf : document.getElementById('cpf').value,
            Data_nascimento: document.getElementById('dataNasc').value
        }
        ic.enviarDados(dados);
    }); 
}

clienteInfo();