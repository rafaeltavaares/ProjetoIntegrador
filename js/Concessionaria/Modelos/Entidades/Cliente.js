export class Cliente{
    constructor(dados){
        this.Nome = dados.nome;
        this.Usuario = dados.usuario;
        this.CPF = dados.cpf;
        this.data_nascimento = dados.Data_nascimento;
        this.tipo = "Cliente";
        this.status = false;
    }

    getNome(){return this.Nome;}
    getData(){return this.data_nascimento}
    
    
    getUsuario(){return this.Usuario;}
    setUsuario(Usuario){this.Usuario = Usuario;}
    setNome(Nome){this.Nome = Nome;}
    
    getCPF(){return this.CPF}

    getTipo(){return this.tipo;}
    getStatus(){return this.status;}
    setStatus(status){return this.status = status;}
}