/*![](https://i.imgur.com/xG74tOh.png)

# Exercício 03

## Mensagem de apresentação

1. Dado o objeto `usuario` abaixo, monte a mensagem `Olá... Eu sou João e tenho 25 anos de idade. Sou programador e minha cor preferida é verde!`, passando dinamicamente as informações contidas no objeto.

```javascript
const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
}
```

_Dica: a desestruturação pode facilitar a escrita do código, além de torná-lo mais legível._

*/
const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    corPreferida: "verde",
}
const { nome, idade, profissao, corPreferida } = usuario;

console.log(`Olá... eu sou ${nome} e tenho ${idade} anos de idade. Sou ${profissao} e minha cor preferida é ${corPreferida} `)