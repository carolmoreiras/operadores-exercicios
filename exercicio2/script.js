const numero1 = Number(prompt("Insira um número aqui"))
const numero2 = Number(prompt("Insira outro número aqui"))

console.log ("O primeiro numero é maior que segundo?",numero1 > numero2) 
console.log("O primeiro numero é igual ao segundo?",numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?",(numero1 % numero2 === 0)) 
console.log("O segundo numero é divisível pelo primeiro?",(numero2 % numero1 === 0))