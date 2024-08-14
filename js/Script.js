import { CadastroClienteException } from "./Concessionaria/infra/CadastroClienteException.js";
import { CadastroVeiculoException } from "./Concessionaria/infra/cadastroVeiculoException.js";
export function validarNome(nome){
        if( nome.length >=4 && nome.length <=80)
            return true;
        else{
            throw new CadastroClienteException('Nome deve ter entre 4 e 80 caracteres!');
        }
    
}

export function validarDiaria(valor_diaria){
    if(valor_diaria > 0 )
        return true;
    throw new CadastroVeiculoException("Valor diária inválido! Valor deve ser maior que zero");
}

export function validarQuilometragem(quilometragem){
    if(quilometragem > 0)
        return true;
    throw new CadastroVeiculoException("Quilometragem inválida! Valor deve ser maior que zero");
}
export function validarAnoFabricacao(data_input) {
    console.log(data_input);
    const anoAtual = new Date().getFullYear();
    if (data_input > 1999 && data_input <= anoAtual) {
        return true;
    } else {
        return new CadastroVeiculoException(`Ano inválido! Ano deve ser maior que 1999 e menor ou igual ao ano atual.`);
    }
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
        throw new CadastroClienteException(`O cliente tem ${data_input} anos. Deve ter pelo menos 18 anos!`);
    }
}
export function validarModelo(modelo){
    if(modelo.length >=4 && modelo.length <= 30)
        return true;
    else{
        throw new CadastroClienteException('Modelo inválido! Modelo deve ter de 4 a 30 caracteres.');
    }
}

