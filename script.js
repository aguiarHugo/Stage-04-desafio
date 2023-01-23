
let firstNumber = prompt('Vamos realizar algumas operações matemáticas, digite o primeiro número: ')
let secondNumber = prompt ('Digite o segundo número: ')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber
const evenOdd = restDiv % 2 == 0? 'Par' : 'Impar'
const numbers = firstNumber == secondNumber? 'Os número inseridos eram iguais' : 'Os números inseridos eram diferentes' 

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Mutiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)
alert ('O número é: ' + evenOdd)
alert(numbers)