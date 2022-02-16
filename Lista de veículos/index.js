/*![](https://i.imgur.com/xG74tOh.png)

# Exercício 02

## Lista de veículos

1. Crie uma lista de objetos com as propriedades a seguir e guarde numa variável/constante chamada `carros`. Cada propriedade de um objeto deve receber um valor apropriado.

    - marca
    - modelo
    - ano
    - cor
    - quantidade_portas
    - automatico

    Obs.: a propriedade `automatico` deve receber um valor booleano que indicará se o carro é automático ou não.

_As informações dos valores de cada propriedade, de cada objeto poderá ser de sua preferência. Crie, no mínimo 3 itens na lista_


*/
const carros = [{
    marca: "Fiat",
    modelo: "Strada Volcano",
    ano: 2021,
    cor: "prata",
    quantidade_portas: 4,
    automatico: true
}, {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2011,
    cor: "preto",
    quantidade_portas: 4,
    automatico: false
}, {
    marca: "Renault",
    modelo: "Sandero",
    ano: 2017,
    cor: "branco",
    quantidade_portas: 4,
    automatico: false
}
]
console.log(carros);