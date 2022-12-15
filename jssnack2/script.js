// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userNumber = document.getElementById('user-number')
const radio = document.getElementsByName('even-odd')
const button = document.getElementById('button')
const form = document.getElementById('form')

function randomNumber() {
    const random = Math.random()
    const randomNumber = Math.floor(random * 5 + 1)

    return randomNumber
}

