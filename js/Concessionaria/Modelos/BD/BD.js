
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
        if(this.veiculos.some(veiculo => veiculo.placa === placa)){
            throw new ConcessionariaException("placa ja registrada");
        }
        return true;
    }

    validarCPF(cpfToVerify){
        if(this.clientes.length === 0 && cpfToVerify.length === 11){
            return true
        }
        if(cpfToVerify.length < 11)
            throw new CadastroClienteException("cpf incompleto")
        if(cpfToVerify.length > 11)
            throw new CadastroClienteException("cpf maior que 11 digitos ")    

        if(this.clientes.some(cliente => cliente.CPF === cpfToVerify)){
            throw new ConcessionariaException("cpf ja registrado");
        }
        return true;
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

        this.bancoDados.Adicionar(dados);
    }
    verificarPlaca(placa){
        return this.bancoDados.validarPlaca(placa);
    }

    verificarCPF(cpf){

       return this.bancoDados.validarCPF(cpf);
    }
}
