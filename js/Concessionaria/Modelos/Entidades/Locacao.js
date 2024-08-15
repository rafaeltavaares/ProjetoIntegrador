export class locacao{
    constructor(dados){
        this.indexCarro = dados.indexVeiculo;
        this.indexCliente = dados.cpfCliente;
        this.data = new Date().getTime(); 
    }
}