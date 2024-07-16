import { exececaoConcessionaria } from "../infra/ConcessionariaException.js";

export class BancoDados{
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
                throw new exececaoConcessionaria("cpf ja registrado");
            return true;
        }
    }

}
