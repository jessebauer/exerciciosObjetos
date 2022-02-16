/*![](https://i.imgur.com/xG74tOh.png)

# Exercício 05

## Cadastro de aulas

1. Um novo curso foi criado e suas aulas precisam ser cadastradas. Abaixo temos o objeto `curso`, que possui uma propriedade chamada `aulas`. Sua tarefa é adicionar a lista de aulas abaixo na propriedade `aulas` do objeto `curso`.


*/
const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}
curso.aulas = [{
    Aula01: {
        Identificador: 01,
        NomedaAula: "Introdução a programação",
    }
    ,

    Aula02: {

        Identificador: 02,
        NomeDaAula: "Variáveis"
    }
    ,

    Aula03: {

        Identificador: 03,
        NomeDaAula: "Condicionais"
    }

    ,

    Aula04: {
        Identificador: 04,
        NomeDaAula: "Arrays"
    }
}]
console.log(curso.aulas[0].Aula01);
