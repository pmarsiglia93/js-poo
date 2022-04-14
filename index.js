//Classe é um molde que define o que eu quero ter.
//Classe é o molde.
//cliente1 e cliente2 são os meus objetos.
//cliente1 é uma instancia da minha classe.

//Proposta de campos privados
// _saldo valor privado.
class Cliente {
    nome;
    cpf;  
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    //Método
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }else{
            console.log("valor insuficiente para saque!")
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(this._saldo);
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

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);