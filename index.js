//Classe é um molde que define o que eu quero ter.
//Classe é o molde.
//cliente1 e cliente2 são os meus objetos.
//cliente1 é uma instancia da minha classe.
class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = "111.222.333-09";
cliente1.agencia = "1001";
cliente1.saldo = "0";
cliente1.rg = "123.456.789-0"

cliente2.nome = "Alice";
cliente2.cpf = "888.222.333-09";
cliente2.agencia = "1001";
cliente2.saldo = "0";

console.log(cliente1);
console.log(cliente2);