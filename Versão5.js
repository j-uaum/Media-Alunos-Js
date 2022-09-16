function aluno(nome, n1, n2){

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
       this.media =  function () {
    
            return (this.nota1 + this.nota2) / 2
    
        }
    
    
    }

    let a = new aluno("igor", 8.0, 4.7)
console.log(a.media())


// a forma mais rapida de criar um objeto e editar sem erros