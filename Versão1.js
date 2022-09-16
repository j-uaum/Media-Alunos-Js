/*let nomes = ["João", "Marcelo", "Jonas", "Charles", "Carlos"];
let notaA = [8.0, 8.0, 9.0, 7.0, 5.0];
let notaB = [4.0, 9.0, 5.0, 7.0, 6.4];

function media (n1, n2){

        return (n1 + n2) /2


}

function sit(media){

if(media >= 7.0){

    return "Aprovado!!" ;

} else if(media < 7.0){
    return "Reprovado!!";
}

}



for(let index in nomes){

let nota1 = notaA[index]
let nota2 = notaB[index]
let m = media(nota1, nota2)

console.log(`nome: ${nomes[index]} nota 1: ${nota1} nota 2: ${nota2} media: ${m} situação: ${sit(m)}`)

}*/


//tomar cuidado com os numeros


//                      Nova tentativa, mais independente



let nome = ["João", "Marcelo", "Jonas", "Charles", "Carlos"]; //nomes dos meliantes
let nota1 = [8.0, 8.0, 9.0, 7.0, 5.0]; // notas dos meliantes
let nota2 = [4.0, 9.0, 5.0, 7.0, 6.4];
let nota3 = [1.0, 2.0, 1.0, 3.0, 1.0];

function media (n1, n2, n3){      // Aqui se calcula a media 

    return (n1 + n2 + n3 ) /3;

}

function sit(media){                 // aqui se calcula a situação dos meliantes, note que aqui ele recebe a media para saber a situação deles
                                    // use return para chamar os valores para o lugar certo
    if(media >= 7.0){                  // usando return esse valor vai parar la embaixo no campo situação, quando a função é chamada, ela tras um valor com ela junto
        return "Aprovado!!"
    } else if( media < 7.0){  
        return "Reprovado!!"
    }
}

for(let index in nome){             // ainda nao sei muito bem o que esse index faz, mas acho que é pra ler o array casa por caso desde o inicio

let nota01 = nota1[index];  //essas são as conversões para ler todo o array nota 
let nota02 = nota2[index];
let nota03 = nota3[index];
let m = media(nota01, nota02, nota03);  // essa variavel foi criada para simplificar minha vida, uso para juntar as substituições de metodos para a função media, note que a variavel m ganha o valor da função media 
// aqui coloca dentro do metodo, as novas variaveis que ja estão com index definido

console.log(`nome: ${nome[index]} nota 1: ${nota01} nota 2: ${nota02} nota 3: ${nota03} media: ${m.toFixed(1)} situação: ${sit(m)}`)

}


// azar que todos foram reprovados ne