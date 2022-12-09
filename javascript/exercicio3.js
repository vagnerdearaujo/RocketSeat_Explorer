/*
    Celsius ==>   Fahrenheit
    Crie uma função que receba uma string em celsius ou fahrenheit e 
    faça a transformação de uma unidade para outra.

    C = (F-32) * 5/9
    F = C * 9/5 + 32
*/

/* ==> A solução que eu propuz
let celsius = convert("72.3","C")
let fahrenheit = convert("37.6","F")

console.log("Celsius: "+celsius)
console.log("Fahrenheit: "+fahrenheit)
console.log(convert("abobora","X"))

function convert(temperatura, destino) {
    let conversao = 0
    try {
        let temperaturaconvertida = 0
        temperaturaconvertida = Number(temperatura);        
        if (String(destino).toUpperCase() == "C") {
            conversao = (temperaturaconvertida - 32) * 5/9;
        }
        else {
            conversao = temperaturaconvertida * (5/9) + 32;
        }
    }
    catch(error) {
        console.log("A temperatura deve ser um número.")
    }
    return conversao;
}
====> */

/* ==> A solução baseada no Mayk*/
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")
    let degreeValue
    let temperatura

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error("Temperaturas apenas em C ou F")
    }

    const Sign = celsiusExists ? "C":"F"
    const toCelsius = (grau) => (grau-32)*5/9;
    const toFahrenheit = (grau) => grau * (5/9) - 32

    degreeValue = Number(degree.toUpperCase().replace(Sign,""));
    if (isNaN(degreeValue)) {
        throw new Error("O Graú deve ser numérico seguido da unidade")
    }

    if (celsiusExists) {
        temperatura = toFahrenheit(degreeValue)
    } else {
        temperatura = toCelsius(degreeValue)
    }

    return temperatura+(celsiusExists?"F":"C");

}

try {
    console.log(transformDegree("27C"))
    console.log(transformDegree("77F"))
    console.log(transformDegree("47H"))
    console.log(transformDegree("XXF"))

    
} catch (error) {
    console.log(error.message)
}
