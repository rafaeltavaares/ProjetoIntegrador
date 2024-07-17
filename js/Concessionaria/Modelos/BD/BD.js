
import { cadastroClienteException } from "../../infra/cadastroClienteException.js";
import { ConcessionariaException } from "../../infra/ConcessionariaException.js";

class BancoDados{
    constructor(){
        this.clientes = [];
        this.veiculos = [];
        
    }

    ListarClientes() {
     return this.clientes;   
    }

    Adicionar(Dados){
        if(Dados.getTipo === "Cliente")
            console.log("estou aqui")
            this.clientes.push(Dados);
        if(Dados.getTipo === "Carro"){
            this.veiculos.push(Dados);
        }
    }

    validarCPF(cpfToVerify){
        if(this.clientes.length === 0 && cpfToVerify.length === 11)
            return true
        if(cpfToVerify.length < 11)
            throw new cadastroClienteException("cpf incompleto")

        if(cpfToVerify.length > 11)
            throw new cadastroClienteException("cpf maior que 11 digitos ")    
        //fazer o if que verifica se tem algo além de numeros
        

        for (let index = 0; index < this.clientes.length; index++) {
            const element = this.clientes[index];
            let cpf = element.getCPF();
            if(cpf === cpfToVerify)
                throw new ConcessionariaException("cpf ja registrado");
            return true;
        

        }
    }

}

export class Interface{
    constructor(){
        this.bancoDados = new BancoDados();
    }

    listarClientesBD(){
        return this.bancoDados.ListarClientes();
    }

    AdicionarCliente(cliente){
        if(cliente === null || cliente === undefined)
            throw new ConcessionariaException("Tipo cliente Inválido")
        this.bancoDados.Adicionar(cliente);
    }

    verificarCPF(cpf){
        console.log()
       return this.bancoDados.validarCPF(cpf);
    }
}
