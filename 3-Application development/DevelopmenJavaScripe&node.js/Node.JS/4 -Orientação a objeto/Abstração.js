class Filme{

    constructor(){
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.direção =  0;
    }

    Reproduzir(){
        console.log("Reproduzindo...")
    }

    Pausar(){
        console.log("Pausado ||")
    }

    Avançar(){
        console.log("Avançar >>")
    }

    Fechar(){
        console.log("Fechar x")
    }
}
//==========================Classe produto==========================================
class Produto{

    constructor(){
        this.nome = '';
        this.preço = 0;
        this.descricao = '';
        this.garantia = 30;
        this.quantidade = 0;
        this.peso = 0;
    }

    Vender(){
        if(quantidade > 0){
            console.log("Vender");
        }else{
            console.log("Produto zerado!!");
        }
    }

    trocar(garantia){
        if(garantia < 30){
        console.log("Trocar produto");
        }else{
            console.log('Validade excedida!');
        }
    }
    calcular_frete(produto){
        console.log("Calcular frete")
    }

    
}
  //=============================Cass Carrinho=========================================
 class Carrinho{
     
    constructor(){
        this.nome = '';
        this.preço = 0;
        this.descricao = '';
    }

    Adicionar(){
        console.log("Adicionar produto.");
    }

    Remover(){
        console.log("Remover produto.");
    }

    comprar(){
        console.log("Finalizando compra.");
    }

}
//===============================Cass Comida=======================================
 class Comida{
     
    constructor(){
        this.nome = '';
        this.preço = 0;
        this.ingredientes = '';
    }

    comprar(){
        console.log("Comprar prato.");
    }

    Adicionar(){
        console.log("Adicionar ingrediente");
    }

    
}

//===============================Cass jogoRpg=======================================
 class Jogo_Rpg{
     
    constructor(){
        this.nome = '';
        this.genero = '';
        this.vida = 100;
    }

    Andar(){
        console.log("Andar");
    }

    Correr(){
        console.log("Correr");
    }

    Atacar(){
        console.log("Atacar")
    }
}

//===============================Cass Carro Aluguel=======================================
class Carro{
     
    constructor(){
        this.nome = '';
        this.tipo = '';
        this.data = Date;
        this.local = '';
    }

    Agendar(){
        console.log("Agendar");
    }

    Entregar(){
        console.log("entregar");
    }

    Retirar(){
        console.log("retirar")
    }
}

//=========================================================================