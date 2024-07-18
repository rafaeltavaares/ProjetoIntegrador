import { CadastroClienteException } from "./Concessionaria/infra/CadastroClienteException.js";
export function validarNome(nome){
        if( nome.length >=4 && nome.length <=80)
            return true;
        else{
            throw new CadastroClienteException('tamanho inválido');
        }
    
}

export function validarDataNascimento(data_input){
    const dataAtual = new Date();

        const data_nascimento = new Date(data_input);
        const diferencaMilisegundos = dataAtual.getTime() - data_nascimento.getTime()
        const diferencaEmDias = diferencaMilisegundos / (1000 * 60 * 60 * 24);
        const idadeEmAnos = Math.floor(diferencaEmDias / 365);
        
        if(idadeEmAnos >= 18)
            return true;
        else
            throw new CadastroClienteException("Idade insuficiente");
}

export function validarModelo(modelo){
    if(modelo.length >=4 && modelo.length <= 30)
        return true;
    else{
        throw new CadastroClienteException('tamanho inválido do modelo');
    }
}

