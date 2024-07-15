import { Cliente } from "./Concessionaria/Modelos/Cliente.js";
import { Interface } from "./Concessionaria/Modelos/interface/InterfaceBd.js";
console.log("Hello web browser");

const interfaceBancoDeDados = new Interface();

let cliente = new Cliente("Rafael","rafaaeltavares","16161305712","10/03/2005");
let cliente3 = new Cliente("Rafael","rafaaeltavares","16161305712","10/03/2005");
let cliente2 = new Cliente("pedro","pedrogamer","1345","10/03/2005");

console.log(interfaceBancoDeDados);
interfaceBancoDeDados.AdicionarCliente(cliente);
interfaceBancoDeDados.AdicionarCliente(cliente2);
interfaceBancoDeDados.AdicionarCliente(cliente3);

const arrayClientes = interfaceBancoDeDados.listarClientesBD();
interfaceBancoDeDados.verificarCPF("123")

