import { exececaoConcessionaria } from "../infra/excecaoConcessionaria.js";
import { Carro } from "./Carro.js" 
export class BancoDados{
    constructor(){
        this.clientes = [];
        this.veiculos = [];
        
    }

    ListarClientes() {
     return this.clientes;   
    }

    Adicionar(Cliente){
        this.clientes.push(Cliente);
    }

    validarCPF(cpfToVeify){
        for (let index = 0; index < this.clientes.length; index++) {
            const element = this.clientes[index];
            let cpf = element.getCPF()
            if(cpf === cpfToVeify){
                throw new exececaoConcessionaria("cpf ja registrado")
            }
        }
    }

}
