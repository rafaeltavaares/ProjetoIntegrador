
import { CadastroClienteException } from "../../infra/CadastroClienteException.js";
import { CadastroVeiculoException } from "../../infra/cadastroVeiculoException.js";
import { ConcessionariaException } from "../../infra/ConcessionariaException.js";

class BancoDados{
    constructor(){
        this.clientes = [];
        this.veiculos = [];
        
    }

    ListarClientes() {
        return this.clientes;   
    }

    ListarVeiculos(){
        return this.veiculos;
    }
    Adicionar(Dados){
        console.log(Dados.getTipo())
        if(Dados.getTipo() === "Cliente")
            this.clientes.push(Dados);
        if(Dados.getTipo() === "Veiculo"){
            
            this.veiculos.push(Dados);
        }
    }

    validarPlaca(placa){
        if(this.veiculos.length === 0 && placa.length === 8)
            return true
        if(placa.length < 8)
            throw new CadastroVeiculoException("Tamanho a placa inválido")
        if(placa.length > 8)
            throw new CadastroVeiculoException("placa maior que 8 digitos")
        for (let index = 0; index < this.veiculos.length; index++) {

            const element = this.veiculos[index];
            let placa_to_verify = element.getPlaca();
            if(placa === placa_to_verify)
                throw new CadastroVeiculoException("placa já existente");
            return true
        }


    }

    validarCPF(cpfToVerify){
        if(this.clientes.length === 0 && cpfToVerify.length === 11)
            return true
        if(cpfToVerify.length < 11)
            throw new CadastroClienteException("cpf incompleto")
        if(cpfToVerify.length > 11)
            throw new CadastroClienteException("cpf maior que 11 digitos ")    
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
    ListarVeiculos(){
        return this.bancoDados.ListarVeiculos();
    }

    Adicionar(dados){
        if(dados === null || dados === undefined)
            throw new ConcessionariaException("Dado Inválido")
        console.log("estou na interface")
        this.bancoDados.Adicionar(dados);
    }

    verificarCPF(cpf){
        console.log()
       return this.bancoDados.validarCPF(cpf);
    }
}
