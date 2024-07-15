export class Cliente{
    constructor(Nome, Usuario, CPF, Data_nascimento){
        this.Nome = Nome;
        this.Usuario = Usuario;
        this.CPF = CPF;
        this.data_nascimento = Data_nascimento;
    }

    setNome(Nome){this.Nome = Nome;}
    getNome(){return this.Nome;}

    setUsuario(Usuario){this.Usuario = Usuario;}
    getUsuario(){return this.Usuario;}

    getCPF(){return this.CPF}
}