let nota1 = 10.0;
let nota2 = 8.0;

let media = (nota1 + nota2) /2; 

/*if(media >= 7){

    console.log(`Sua media foi ${media} você passou`)  // o ${} só funciona com crase
}
else {
    console.log(`Sua media foi ${media} você não passou`)
}*/

// lembre que precisa apertar f8 pra executar o codigo e abrir o terminal com o node.js

let geral = ""

if(media >= 8 ){

   // console.log(`Media excelente ${media}`)
     geral = "Excelente"

}
else if (media >= 7){
    //console.log(`Media regular ${media}`)

    geral = "Regular"
}
else {
    //console.log(`Media ruim ${media}`)
    geral = "Ruim"
}

console.log(media)
console.log(geral)

switch(geral){

case "Excelente" :
    console.log('Parabens voce foi bem')
        break;
case "Regular" :
    console.log('Foi bem, mas estude mais')
    break;
case "Ruim" :
    console.log('Estuda burro')
    break;
default:
    console.log
    break;



}