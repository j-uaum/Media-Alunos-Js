
let calc = function(){

    return (this.nota1 + this.nota2) / 2;
    
    
    }
    
    let sit = function(){
    
    
     let mm =  (this.nota1 + this.nota2) / 2
    
    
    if(mm >= 7.0){
        return "aprovado";
    } else if(mm < 7.0){
        return "Reprovado";
    }
    
    } // tentar fazer switch ao inves de if else  ; o lance do sit  dar certo é fazer uma let com a formula novamente pra criar o resultado direto pra função.
    
    
    
    let turma =  [
    
    
    {
        nome: "João",  
        nota1: 9.0, 
        nota2: 7.0,
        media: calc,
        situação: sit
    },

    {
        nome: "Igor",
        nota1: 7.0,
        nota2: 2.0,
        media: calc,
        situação: sit
    }
    
    
    ]
   
   // console.log(turma[1].situação())
    console.log(`O aluno ${turma[1].nome} tem média: ${turma[1].media()} e sua situação é ${turma[1].situação()}`)
