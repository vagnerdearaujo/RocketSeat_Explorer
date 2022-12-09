/*
    Objects
    para escrever objetos
    {propriedade: valor}
*/    

console.log({
    name: "Vagner",
    idade: 55,
    andar: function() {
        console.log("Andando ...")
    }

})

/*
    Array
    Diferentemente de outras linguagens, o Array não é tipado, portanto é permitida a mistura de tipos
    ["Valor",1,2,"ValorX"]

*/

console.log(["Valor",1,2,"ValorX"])

/*
    Variáveis
    var e Let criam uma variável
    const cria um container de valor que não muda.
    no JS as variáveis são fracamente tipadas. 
    É possível criar uma variável simplesmente atribuindo um valor para ela sem as palavras reservadas var ou let 
*/    

b = {name: "Vagner",
     idade: 55,
     sayname: function() {
       console.log(b.name)
     }}

b.sayname()
