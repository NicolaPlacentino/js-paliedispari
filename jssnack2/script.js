// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userNumber = document.getElementById('user-number')
const button = document.getElementById('button')
const form = document.getElementById('form')
const select = document.getElementById('even-odd')


const calcMessage = document.getElementById('calculation')
const winnerMessage = document.getElementById('winner')

function generateNumber() {
    const random = Math.random()
    const randomNumber = Math.floor(random * 5 + 1)

    return randomNumber
}

function isEven(number) {
    let result = false

    if (number % 2 === 0){
        result = true
    }

    return result
}


form.addEventListener("submit", function(event){
    event.preventDefault()


    const cpuNumber = generateNumber()
   
    const sum = cpuNumber + parseInt(userNumber.value.trim())

    let calculation = `${userNumber.value} + ${cpuNumber} = ${sum}`
    let winner = ''

    console.log(sum % 2)

    if (select.value === 'even') {  
        if (isEven(sum)) {
            winner = 'giocatore!'
        } else {
            winner = 'computer!'
        }
    } else {
        if (!isEven(sum)) {
            winner = 'giocatore!'
        } else {
            winner = 'computer!'
        }
    }

    calcMessage.innerText = calculation
    winnerMessage.innerText = `Vince il ${winner}`
})