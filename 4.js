// Faça uma função que receba um parâmetro string e um segundo como string
// também, a função deve retornar true caso o primeiro termine como o segundo.
var palavraUm = "escola";
var palavraDois = "bola";
console.log(VerificarPalavra(palavraUm, palavraDois));
function VerificarPalavra(paramentroUm, parametroDois) {
    var resultado = false;
    var arrayUm = paramentroUm.split("");
    var arrayDois = parametroDois.split("");
    var tamanhoUm = arrayUm.length;
    var tamanhoDois = arrayDois.length;
    console.log(arrayUm);
    console.log(arrayDois);
    if (arrayUm[tamanhoUm - 3] == arrayDois[tamanhoDois - 3] && arrayUm[tamanhoUm - 2] == arrayDois[tamanhoDois - 2] && arrayUm[tamanhoUm - 1] == arrayDois[tamanhoDois - 1]) {
        resultado = true;
        return resultado;
    }
    return resultado;
}
