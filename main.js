//Variaveis
const btnTry = document.querySelector("#btn-Try")
const btnReset = document.querySelector("#btn-Reset")

let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 0


// Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)



//funções callback
function handleTryClick(event){
    event.preventDefault() //não faça o padrão 

    const inputNumber = document.querySelector('#inputNumber')


    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `Parabéns! Você acertou em ${ xAttemps} tentativas`

    }

    if(Number(inputNumber.value) > 10){
        
        toggleScreen()

        screen2.querySelector("h2").innerText = ` Digite um número de 0 a 10 `
    }

    if(xAttemps >= 5){

        toggleScreen()

        document.querySelector(".screen2 h2").innerText = `Que pena, você não conseguiu adivinhar o número! Tente Novamente! `
    }
    

    inputNumber.value = ""
    xAttemps++
    
}

function handleResetClick(){
    toggleScreen()
    xAttemps = 0
}

//Alterar tela

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}