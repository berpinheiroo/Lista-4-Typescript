// Faça uma função que receba um parâmetro string e um segundo como string
// também, a função deve retornar true caso o primeiro termine como o segundo.

// let palavraUm : string = "escola"
// let palavraDois : string = "bola"

// console.log(VerificarPalavra(palavraUm, palavraDois))

// function VerificarPalavra(paramentroUm:string, parametroDois:string): boolean{
//     let resultado : boolean = false
//     let arrayUm:string[] = paramentroUm.split("")
//     let arrayDois:string[] = parametroDois.split("")
//     let tamanhoUm : number = arrayUm.length
//     let tamanhoDois : number = arrayDois.length

//     console.log(arrayUm)
//     console.log(arrayDois)

//     if(arrayUm[tamanhoUm - 3] == arrayDois[tamanhoDois - 3] && arrayUm[tamanhoUm - 2] == arrayDois[tamanhoDois - 2] && arrayUm[tamanhoUm - 1] == arrayDois[tamanhoDois - 1]){
//         resultado = true
//         return resultado
//     }

//     return resultado
   
//  }

// Faça uma função que receba uma string como parâmetro, e deve converter para
// uma nova string onde cada caractere deve ser substituído por “(“ se aparece
// apenas uma vez na string original ou por “)” se aparecer mais de uma vez. A função
// não deve diferenciar maiúsculas e minúsculas para fazer a contagem.

// let palavra : string = "teste"

// console.log(ContarCaractere(palavra))

// function ContarCaractere(parametro:string): string{
//    let parametroArray: string[] = parametro.split("")
//    let arrayFinal: string[] = []

//    parametroArray.forEach(x => {
//     let contador: string[] = parametroArray.filter(y => y == x)
//     if(contador.length == 1){
//         arrayFinal.push("(")
//     }
//     else{
//         arrayFinal.push(")")
//     }
//    })
//    return arrayFinal.join("")
// }



// Faça uma função que recebe dois parâmetros: um número inteiro positivo ”n” e um
// dígito “d” entre 0 e 9. A função deve calcular o quadrado de todos os números entre
// 0 e “n”, e depois contar quantas vezes o dígito “d” aparece nos resultados das
// contas anteriores e por fim retorne esse valor. (para calcular o quadrado basta
// multiplicar um número vezes ele mesmo => k*k)


console.log(VerificarNumero(15, 2))

function VerificarNumero(n:number, d:number):number{
    let contador: number = 0
    let arrayNumeros: number[] = []

    for (let index = 0; index <= n; index++) {
        arrayNumeros.push(index*index)        
    }

    console.log(arrayNumeros)

    let numeroString: string = arrayNumeros.join("")
    for (let index = 0; index < numeroString.length; index++) {
        if(numeroString.charAt(index) == d.toString()){
            contador++
        }        
    }
    return contador
}