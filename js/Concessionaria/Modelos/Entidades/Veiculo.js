export class Veiculo{
    constructor(Dados){
        this.modelo = Dados.modelo;
        this.ano_fabricacao = Dados.ano_fabricacao;
        this.valor_diaria = Dados.valor_diaria;
        this.quilometragem = Dados.quilometragem;
        this.placa = Dados.placa;
        this.Cor = Dados.cor;
        this.tipoVeiculo = Dados.tipo_veiculo;
        this.tipo = "Veiculo";
    }

    getTipo(){return this.tipo}
    getPlaca(){return this.placa}
}