export class locacao{
    constructor(dados){
        this.indexCarro = dados.indexVeiculo;
        this.indexCliente = dados.cpfCliente;
        this.data = new Date().toLocaleDateString();; 
        this.tipo = "locacao";
    }

    getindexCliente(){return this.indexCliente;}
    getDataLocacao(){return this.data}
    getTipo(){
        return this.tipo;
    }
}