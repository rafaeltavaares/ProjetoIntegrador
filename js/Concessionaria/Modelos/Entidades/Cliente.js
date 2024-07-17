export class Cliente{
    constructor(dados){
        this.Nome = dados.nome;
        this.Usuario = dados.usuario;
        this.CPF = dados.cpf;
        this.data_nascimento = dados.Data_nascimento;
        this.tipo = "Cliente"
    }

    setNome(Nome){this.Nome = Nome;}
    getNome(){return this.Nome;}

    setUsuario(Usuario){this.Usuario = Usuario;}
    getUsuario(){return this.Usuario;}

    getCPF(){return this.CPF}

    getTipo(){return this.tipo;}
}