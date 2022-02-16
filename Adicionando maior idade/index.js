/*![](https://i.imgur.com/xG74tOh.png)

# Exercício 04

## Adicionando maior idade

1. Dado a lista de objetos abaixo, adicione uma nova propriedade chamada `maior_idade` para cada objeto da lista. A propriedade deverá receber um valor booleano de acordo com a propriedade `idade` de cada objeto. Caso a idade seja maior que 17, o valor deve ser `true`, caso contrário `false`.


*/
const usuarios = [

    {
        joao: {
            nome: "João",
            idade: 25,

        }

    },
    {
        nome: "Ana",
        idade: 18,

    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
for (let usuario of usuarios) {
    usuario.idade > 17 ? usuario.maior_idade = true : usuario.maior_idade = false;
}


