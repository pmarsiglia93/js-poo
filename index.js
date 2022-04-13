//Classe é um molde que define o que eu quero ter.
//Classe é o molde.
//cliente1 e cliente2 são os meus objetos.
//cliente1 é uma instancia da minha classe.
class Cliente {
    nome;
    cpf;  
}

class ContaCorrente {
    agencia;
    saldo;

    //Método
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }else{
            console.log("valor insuficiente para saque!")
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "111.222.333-09";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "888.222.333-09";

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = "0";
contaCorrenteRicardo.agencia = "1001";

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = "100";
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(30);


console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);