// Palidroma
// Chiedere all’utente di inserire una parola tramite un form
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = document.getElementById('user-word')
const button = document.getElementById('button')
const form = document.getElementById('form')

function reverseWord(word) {

    let result = ''

    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i]
    }

    return result
}
