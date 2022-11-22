const operacao1 = 5 > 20 && 5 < 2
console.log(operacao1)


const operacao2 = 5 === 5 || 5 === "5"
console.log(operacao2)


const operacao3 = !(20 > 50) 
console.log(operacao3)


const operacao4 = !(20 > 50 || 50 > 60)
console.log(operacao4)



//#Parte2

const salario = 2000
const quantidadeFilhos = 2
const auxCreche = 45.50
const comissao = 0.1
const descontoINSS = 0.05

const vendas = {
    janeiro: 5784.50,
    fevereiro: 3418.41,
    março: 4124.10,
    abril: 1874.00,
    maio: 7000.00,
    junho: 9450.00
}

// acessando valores do objeto
console.log(vendas.janeiro)
console.log(vendas["janeiro"])

const salarioMaisAuxCreche = salario + (quantidadeFilhos*auxCreche)
const comissaoJaneiro = vendas.janeiro*comissao

const descontoINSSJaneiro = (salario + comissaoJaneiro) *descontoINSS


