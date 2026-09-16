let attempts = 0
let randomNumber = Math.floor(Math.random() * 20 + 1)

console.log(randomNumber)

const guess = document.getElementById("guess")
const submit = document.getElementById("submit")
const result = document.getElementById("result")
const attemptsText = document.getElementById("attempts")

console.log(guess)
console.log(submit)

submit.addEventListener("click", checkGuess)

function checkGuess(){
    const userValue = Number(guess.value)
    attempts++
    if(userValue === randomNumber){
       result.textContent = "Congratulations, you guessed it!"
       result.style.color = "Green"
    } else if (userValue < randomNumber){
       result.textContent = "Go higher!"
      result.style.color = "brown"
    }else {
       result.textContent = "Go lower!"
       result.style.color = "red"
    }

    attemptsText.textContent = "Attempts:" + attempts
}