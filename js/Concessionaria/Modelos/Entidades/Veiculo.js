export class Veiculo{
    constructor(cor, tipoVeiculo ,placa, ano_fabricacao, valor_diaria, quilometragram){
        this.ano_fabricacao = ano_fabricacao;
        this.valor_diaria = valor_diaria;
        this.quilometragram = quilometragram;
        this.placa = placa;
        this.Cor = cor;
        this.tipoVeiculo = tipoVeiculo;
        this.tipo = "Veiculo";
    }

    getTipo(){return this.tipo}
}