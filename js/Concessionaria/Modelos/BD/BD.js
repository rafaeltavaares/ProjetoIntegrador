
import { ConcessionariaException } from "../../infra/ConcessionariaException";

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
            this.clientes.push(Dados);
        if(Dados.getTipo === "Carro"){
            this.veiculos.push(Dados);
        }
    }

    validarCPF(cpfToVeify){
        for (let index = 0; index < this.clientes.length; index++) {
            const element = this.clientes[index];
            let cpf = element.getCPF();
            if(cpf === cpfToVeify)
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
        this.bancoDados.validarCPF(cpf);
    }
}
