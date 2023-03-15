class Dado{

    constructor(faces){
        this.faces = faces;
    }

    Rolar(){
        console.log("Resultado do dado: " + this. GetRandomIntInclusive(1,this.faces));

    }


    GetRandomIntInclusive(min,max){
        min = Math.min(min);
        max = Math.max(max);
        return Math.floor(Math.random() * (max - min + 1)) + min ;
    }

}

var d6 = new Dado(6);
var d12 = new Dado(12);
var d100 = new Dado(100);

d6.Rolar();
d12.Rolar();
d100.Rolar();
