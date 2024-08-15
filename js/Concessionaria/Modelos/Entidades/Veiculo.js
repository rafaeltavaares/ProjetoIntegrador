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
    getPlaca(){return this.placa}
    getAlugado(){return this.isalugado}
    setIsAlugado(fator) {this.isalugado = fator}
}