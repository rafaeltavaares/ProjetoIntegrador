import { exececaoConcessionaria } from "../../infra/excecaoConcessionaria.js";
import { BancoDados } from "../BD.js";

export class Interface{
    constructor(){
        this.bancoDados = new BancoDados();
    }

    listarClientesBD(){
        return this.bancoDados.ListarClientes();
    }

    AdicionarCliente(cliente){
        if(cliente === null || cliente === undefined)
            throw new exececaoConcessionaria("Tipo cliente Inválido")
        this.bancoDados.Adicionar(cliente);
    }

    verificarCPF(cpf){
        this.bancoDados.validarCPF(cpf);
    }
}