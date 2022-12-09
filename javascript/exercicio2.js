/*
  Receitas x Despesas
  => Criar um objeto que possuirá duas propriedades, ambas do tipo array
     * receitas[]
     * despesas
     
 Agora, crie uma função que irá calcuar o total de receitas e despesas e irá mostrar uma mensage se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/


let orcamento = {
    receitas:[100,300,400],
    despesas:[10,20,400,100,150,25.44,99.77,154.77,457.87]
}

calculabalanco();

function soma(valores) {
    let total = 0;
    for (let valor of valores)
    {
        total += valor;
    }
    return total;
}

function calculabalanco()
{
    let total_receitas = soma(orcamento.receitas);
    let total_despesas = soma(orcamento.despesas);
    let saldo = total_receitas - total_despesas;
    console.log("A família está com saldo "+(saldo > 0?"positivo":"negativo"))
    console.log("Saldo apurado: R$ "+saldo.toFixed(2));
    console.log("Total de Receitas: R$ "+total_receitas.toFixed(2));
    console.log("Total de Despesas: R$ "+total_despesas.toFixed(2));
}