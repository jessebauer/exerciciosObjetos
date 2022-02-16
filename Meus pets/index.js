/*![](https://i.imgur.com/xG74tOh.png)

# Exercício 08

## Meus pets

1. Abaixo, temos uma lista de pessoas, onde cada pessoa, possui uma lista com um, vários ou nenhum pet. Percorra cada pessoa da lista e imprima uma mensagem de acordo com as condições a seguir.

a. Se a pessoa não tiver pets, a mensagem deve ser: `Sou João e não tenho pets`.

b. Se a pessoa tiver apenas um pet, a mensagem deve ser: `Sou João e tenho 1 pet`.

c. Se a pessoa tiver mais de um pet, a mensagem deve ser: `Sou João e tenho 3 pets`.

*/
const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].pets.length <= 0) {
        console.log(`Sou ${usuarios[i].nome} e não tenhos pets.`)
    } else {
        console.log(`Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} ${usuarios[i].pets.length === 1 ? "pet" : "pets"}.`)
    }
}