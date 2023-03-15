class Leitor{
    ler(caminho){
        return "conteudo do arquivo"
    }
}

class Escritor{
    Escrever(arquivo,conteudo){
        console.log("Conteúdo criado!");
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo criado!");
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo");
    }
}


class ManipuladorDeArquivo{

    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.Escritor = new Escritor();
        this.Criador = new Criador();
        this.Destruidor = new this.Destruidor();
    }
}
class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new Criador();
        this.escritor = new Escritor();
    }

    salvarListaDeUsuarios(Lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt",lista);
    }
}



var manipulador = new ManipuladorDeArquivo("meuarquivo.txt");

manipulador.leitor.ler();
manipulador.Escritor.Escrever();
manipulador.Criador.Criar();
manipulador.Destruidor.Deletar();


var usuarios = new GerenciadorDeUsuarios();

usuarios.salvarListaDeUsuarios(["victor", "Lima"]);