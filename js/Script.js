import { CadastroClienteException } from "./Concessionaria/infra/CadastroClienteException.js";
import { CadastroVeiculoException } from "./Concessionaria/infra/cadastroVeiculoException.js";
export function validarNome(nome){
        if( nome.length >=4 && nome.length <=80)
            return true;
        else{
            throw new CadastroClienteException('tamanho inválido');
        }
    
}

export function validarDiaria(valor_diaria){
    if(valor_diaria > 0 )
        return true;
    throw new CadastroVeiculoException("valor da diaria inválido");
}

export function validarQuilometragem(quilometragem){
    if(quilometragem > 0)
        return true;
    throw new CadastroVeiculoException("Quilometragem Inválida");
}

export function validarAnoFabricação(data_input){
    // const dataAtual = new Date();
    
    // const anoAtual = dataAtual.getFullYear();

    

    // if(anoFabricacao >= 2000 && data_input <= anoAtual){
    //     return true;
    // }else{
    //     throw new CadastroVeiculoException("Ano de fabricação não permitido para o padrão da empresa");
    // }
    return true;

}

export function validarDataNascimento(data_input) {
    const dataAtual = new Date();
    const data_nascimento = new Date(data_input);
    console.log(data_input)
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();

    const anoNascimento = data_nascimento.getFullYear();
    const mesNascimento = data_nascimento.getMonth();
    const diaNascimento = data_nascimento.getDate();

    let idade = anoAtual - anoNascimento;
    let diaNascimentoNovo = diaNascimento + 1; // por algum motivo o diaNascimento tava pegando o dia atual - 1 então pra resolver somamos 1 :)
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimentoNovo)) {
        idade--;
    }

    if (idade >= 18) {
        return true;
    } else {
        throw new CadastroClienteException("Idade insuficiente");
    }
}
export function validarModelo(modelo){
    if(modelo.length >=4 && modelo.length <= 30)
        return true;
    else{
        throw new CadastroClienteException('tamanho inválido do modelo');
    }
}

