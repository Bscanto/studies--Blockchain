class Filme {
    // Classe
    constructor(titulo, ano, genero, diretor,) {   // é uma função responsavel em gerar uma instancia na memória 
        // Atributos
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.direção = 0;
    }

    Reproduzir() { // Métodos
        console.log("Reproduzindo...")
    }

    Pausar() {// Métodos
        console.log("Pausado ||")
    }

    Avançar() {// Métodos
        console.log("Avançar >>")
    }

    Fechar() {// Métodos
        console.log("Fechar x")
    }

    Ficha(){
        console.log("Titulo: " + this.titulo);
        console.log("Ano de lançamento: " + this.ano);
        console.log("Gênero: " + this.genero);
        this.Reproduzir();
    }
}

var vingadores = new Filme("Vingadores 2", "2014", "ação", "Alguem", "2h");

vingadores.Ficha();


//console.log(vingadores.titulo);
//console.log(vingadores.ano);
//vingadores.Reproduzir();

var batman = new Filme("Batman", "2009", "ação");

batman.Ficha();

//console.log(batman.titulo);
//console.log(batman.ano);