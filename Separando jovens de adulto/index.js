/*![](https://i.imgur.com/xG74tOh.png)

# Exercício 06

## Separando jovens de adulto

1. Dado a lista de usuários abaixo, separe os usuários que possuem menos de 18 anos dos demais. Para isso, você deverá criar duas novas constantes `jovens` e `adultos`. Todos os usuários menores de 18 anos devem ser inseridos na constante `jovens` e os demais na constante `adultos`.

```javascript
const usuarios = [
    {
        nome: "João",
        idade: 25,
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
``` */
const usuarios = [
    {
        nome: "João",
        idade: 25,
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
    }]
const jovens = [];
const adultos = [];
let jovensObj = {};
let adultosObj = {};
for (let usuario of usuarios) {
    usuario.idade < 18 ? jovens.push(usuario) : adultos.push(usuario)
}
console.log(jovens);
