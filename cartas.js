class cartasPadroes {
    constructor(cor) {
        this.cor = null;
        this.numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.alteradoresDeCores = ["basico", "+4"];
        this.adicionadoresDeCartas = ["+2", "+4"];
        this.propriedadesEspeciais = ["bloquearOponente", "retornar"];
    }
}

class cores {
    constructor(cor) {
        this.cor = cor;
        this.cartas = cartasPadroes(this.cor);
    }
}

const cartas_vermelhas = cores("vermelho");

console.log(cartas_vermelhas);