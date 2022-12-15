// Palidroma
// Chiedere all’utente di inserire una parola tramite un form
// Creare una funzione per capire se la parola inserita è palindroma

const userWordArea = document.getElementById('user-word')
const button = document.getElementById('button')
const form = document.getElementById('form')
const finalMessageArea = document.getElementById('final-message')

function reverseWord(word) {

    let result = ''

    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i]
    }

    return result
}

form.addEventListener("submit", function(event){
    event.preventDefault()

    const userWord = userWordArea.value.toLowerCase()

    const reversedWord = reverseWord(userWord)

    let finalmessage = ''

    if (reversedWord === userWord){
        finalmessage = `"${userWord}" è palindroma`
    } else {
        finalmessage = `"${userWord}" non è palindroma, al contrario sarebbe "${reversedWord}"`
    }

    finalMessageArea.innerText = finalmessage
})