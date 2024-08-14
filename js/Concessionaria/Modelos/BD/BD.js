
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

    excluir(tipo,index){
        if(tipo === "cliente")
            this.clientes.splice(index,1);
        if(tipo === "veiculo")
            this.veiculos.splice(index,1);
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
        if(this.veiculos.length === 0 && placa.length === 7)
            return true
        if(placa.length < 7)
            throw new CadastroVeiculoException("Tamanho a placa inválido")
        if(placa.length > 7)
            throw new CadastroVeiculoException("placa maior que 8 digitos")
        if(this.veiculos.some(veiculo => veiculo.placa === placa)){
            throw new ConcessionariaException("placa ja registrada");
        }
        return true;
    }

    validarCPF(cpfToVerify){
        
        
        let cpf = cpfToVerify.replace(/\D/g, '');


        if (cpf.length !== 11) {
            throw new CadastroClienteException("CPF inválido!");
        }

        if (/^(\d)\1+$/.test(cpf)) {
            throw new CadastroClienteException("CPF inválido!");
        }

    
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = soma % 11;
        let j = (resto < 2) ? 0 : 11 - resto;


        if (parseInt(cpf.charAt(9)) !== j) {
            throw new CadastroClienteException("CPF inválido!");
        }


        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
         resto = soma % 11;
        let k = (resto < 2) ? 0 : 11 - resto;


        if (parseInt(cpf.charAt(10)) !== k) {
            throw new CadastroClienteException("CPF inválido!");
        }
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
    excluir(tipo,index){
        this.bancoDados.excluir(tipo,index);
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
