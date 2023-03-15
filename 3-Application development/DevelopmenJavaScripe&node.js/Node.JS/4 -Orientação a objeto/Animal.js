class Animal{

    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    checarEstoque(){
        return 10;
    }

    MetodoQualquer(){
        console.log("Este método faz parte da classe mãe!");
    }
}

class Cachorro extends Animal{

    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    }

    Latir(){
        console.log('ROLF! ROLF!');
    }

    ChecarEstoque(){
        console.log("Na loja temos 20 dogões");
    }

    MetodoQualquer(){
        console.log("Aqui éuma classe do dogs!");
        super.MetodoQualquer();
        console.log("Aqui vem funcionalidades!");
    }

}

var dog =new Cachorro("dogão",5,250, "Fila", 30)

dog.checarEstoque();
dog.Latir();
dog.MetodoQualquer();

console.log(dog.idade);
