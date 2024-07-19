import { Interface } from "../BD/BD.js";
import { Veiculo } from "../Entidades/Veiculo.js";
import { Cliente } from "../Entidades/Cliente.js";
import { validarNome, validarDataNascimento, validarQuilometragem, validarDiaria, validarModelo } from "../../../Script.js";
class InterfaceCliente{
    constructor(){
        this.interface = new Interface();
    }

    enviarDadosVeiculo(dados){

        if(this.interface.verificarPlaca(dados.placa)){

            if(this.validarModelo(dados.modelo)){
            
                if(this.validarDiaria(dados.valor_diaria)){
            
                    if(this.validarQuilometragem(dados.quilometragem)){
                        //adicionar validação de ano de fabricacao!!!!
                        const veiculo = new Veiculo(dados);
                        this.interface.Adicionar(veiculo);
                        return this.interface.ListarVeiculos();
            
                    }
                }
            }
        }
    }

    enviarDados(dados){
        if(this.validarNome(dados.nome)){

            if(this.validarCpf(dados.cpf)){
                
                if(this.validarDataNascimento(dados.Data_nascimento)){
                    const cliente = new Cliente(dados);
                    this.interface.Adicionar(cliente);
                    return this.interface.listarClientesBD();
                }
            }
        }
    }   

    validarDiaria(valor_diaria){return validarDiaria(valor_diaria);}

    validarQuilometragem(quilometragem){return validarQuilometragem(quilometragem);}

    validarModelo(modelo){return validarModelo(modelo);}
    
    validarNome(nome){return validarNome(nome);}

    validarCpf(cpf){return this.interface.verificarCPF(cpf);}

    validarDataNascimento(data_nascimento){return validarDataNascimento(data_nascimento);}

}
function clienteSetup(){return new InterfaceCliente();}

function clienteInfo(){
    const ic = clienteSetup();
    const btn = document.getElementById("btnEnviarDadosCliente");
    const btn_veiculo = document.getElementById("btnEnviarDadosVeiculo"); 
    btn_veiculo.addEventListener("click",()=>{
        const dados = {

            cor : document.getElementById("cor").value,
            placa : document.getElementById("placa").value,
            ano_fabricacao: document.getElementById("ano_fabricacao").value,
            quilometragem: document.getElementById("quilometragem").value,
            valor_diaria: document.getElementById("ValorDiaria").value,
            tipo_veiculo : document.getElementById("tipoVeiculo").value,
            modelo : document.getElementById("modelo").value
        }
        ic.enviarDadosVeiculo(dados);
        
    });

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