// Faça uma função que receba um parâmetro string e um segundo como string
// também, a função deve retornar true caso o primeiro termine como o segundo.

let palavraUm : string = "amadurecida"
let palavraDois : string = "agradecida"

console.log(VerificarPalavra(palavraUm, palavraDois))

function VerificarPalavra(paramentroUm:string, parametroDois:string): boolean{
    let resultado : boolean = false
    let arrayUm:string[] = paramentroUm.split("")
    let arrayDois:string[] = parametroDois.split("")
    let tamanhoUm : number = arrayUm.length
    let tamanhoDois : number = arrayDois.length

    console.log(arrayUm)
    console.log(arrayDois)

    if(arrayUm[tamanhoUm - 3] == arrayDois[tamanhoDois - 3] && arrayUm[tamanhoUm - 2] == arrayDois[tamanhoDois - 2] && arrayUm[tamanhoUm - 1] == arrayDois[tamanhoDois - 1]){
        resultado = true
        return resultado
    }

    return resultado
   
}