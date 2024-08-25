export class Veiculo{
    constructor(Dados){
        this.modelo = Dados.modelo;
        this.ano_fabricacao = Dados.ano_fabricacao;
        this.valor_diaria = Dados.valor_diaria;
        this.quilometragem = Dados.quilometragem;
        this.placa = Dados.placa;
        this.tipoVeiculo = Dados.tipo_veiculo;
        this.tipo = "Veiculo";
        this.isalugado = false;
    }

    getTipo(){return this.tipo}
    getModelo(){return this.modelo}
    getPlaca(){return this.placa}
    getAlugado(){return this.isalugado}
    getQuilometragem(){return this.quilometragem}
    setQuilometragem(quilometragem){this.quilometragem = quilometragem}
    getDiaria(){return this.valor_diaria}
    setIsAlugado(fator) {this.isalugado = fator}
}