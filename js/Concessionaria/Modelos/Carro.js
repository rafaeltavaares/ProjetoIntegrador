export class Carro{
    constructor(Nome, Cor){
        this.nome = Nome;
        this.Cor = Cor;
        this.tipo = "Carro";
    }

    getTipo(){return this.tipo}
}