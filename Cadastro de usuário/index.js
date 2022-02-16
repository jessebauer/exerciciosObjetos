/*![](https://i.imgur.com/xG74tOh.png)

# Exercício 01

## Cadastro de usuário

1. Crie um objeto com as propriedades a seguir e guarde numa variável/constante chamada `endereco`. Cada propriedade deve receber um valor apropriado.


*/

const endereco = {
    rua: "Santa Mônica",
    numero: 570,
    complemento: "Nenhum",
    bairro: "Boa Vista",
    cep: 89206040,
    cidade: "Joinville",
    estado: "Solteiro",
    pais: "Brasil"
}

const usuario = {
    nome: "Jessé",
    email: "jesse_ruan@hotmail.com",
    telefone: 47992250505,
    data_nascimento: "29/11/99",
    endereco
}

console.log(usuario);
