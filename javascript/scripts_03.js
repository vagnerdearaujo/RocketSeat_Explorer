/*
    Escopo
    Define a visibilidade de uma variável.
    { e } definem o início e fim de um escopo.
    O que for definido dentro de um escopo não pode ser visto fora dele

    var: define uma variável de escopo global
    let: define uma variável local ao contexto onde foi criada
    criar uma variável apenas indicando um valor, terá o mesmo efeito de "var"
*/    

let escopo_global = "Estou no escopo global"
{
    let escopo_local = "Estou no escopo local"
    console.log(`Local: ${escopo_local} \n Global: ${escopo_global}`)
}
//A linha abaixo irá apresentar um erro, pois a variável escopo_local não existe fora do contexto.
console.log(`Local: ${escopo_local} \n Global: ${escopo_global}`)

/*
    Toda variável deve ser declarada com "let" para ser mantida no escopo de origem.
    A utilização de var deve ter a explícita intenção de realizar a criação de variável de escopo global.
*/

//Na estrutura abaixo haverá 3 instâncias da variável cnt_interno.
let cntx_fora = "Contexto externo"
{
    let cnt_interno = "Contexto interno 1"
    {
        let cnt_interno = "Contexto interno 2"
        {
            let cnt_interno = "Contexto interno 3"
            console.log("Contexto externo: "+cntx_fora)
            //Resultado: "Contexto interno 3"
            console.log("Contexto interno: "+cnt_interno)
        }
        //Resultado: "Contexto interno 2"
        console.log("Contexto interno: "+cnt_interno)
    }
    //Resultado: "Contexto interno 1"
    console.log("Contexto interno: "+cnt_interno)
}

//Na estrutura abaixo haverá apenas uma instância da variável cnt_interno
let cntx_fora1 = "Contexto externo"
{
    cnt_interno1 = "Contexto interno 1"
    {
        cnt_interno1 = "Contexto interno 2"
        {
            cnt_interno1 = "Contexto interno 3"
        }
    }
    //Resultado: "Contexto interno 3"
    console.log("Contexto interno: "+cnt_interno1)
}
