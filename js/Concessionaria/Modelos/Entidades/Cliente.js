export class Cliente{
    constructor(Dados){
        this.Nome = Dados.Nome;
        this.Usuario = Dados.Usuario;
        this.CPF = Dados.CPF;
        this.data_nascimento = Dados.Data_nascimento;
        this.tipo = "Cliente"
    }

    setNome(Nome){this.Nome = Nome;}
    getNome(){return this.Nome;}

    setUsuario(Usuario){this.Usuario = Usuario;}
    getUsuario(){return this.Usuario;}

    getCPF(){return this.CPF}

    getTipo(){return this.tipo;}
}