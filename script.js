const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const start = document.querySelector('#start')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole1')
        square.classList.remove('mole2')
        square.classList.remove('mole3')
        square.classList.remove('mole4')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    if (randomSquare.id === '1' || randomSquare.id === '5') {
        randomSquare.classList.add('mole1')
    } else if (randomSquare.id === '2' || randomSquare.id === '6') {
        randomSquare.classList.add('mole2')
    } else if (randomSquare.id === '3' || randomSquare.id === '8') {
        randomSquare.classList.add('mole3')
    } else {
        randomSquare.classList.add('mole4')
    }

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null        
        }
    })
})


   
let startGame = false

function playGame() {
    result = 0
    score.textContent = 0
    currentTime = 30
    timeLeft.textContent = currentTime
    let countDownTimerId = setInterval(countDown, 1000)
    timerId = setInterval(randomSquare, 600)
    startGame = true
    function countDown() {
       currentTime--
       timeLeft.textContent = currentTime
       if (currentTime == 0) {
           clearInterval(countDownTimerId)
           clearInterval(timerId)
           startGame = false
       }
    }
    countDown(countDownTimerId) 
}

start.addEventListener('click', (e) => {
    if (startGame === false) {
        playGame()
    } else {
        return
    }
})

start.addEventListener('mouseover', (e) => {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        let ripples = document.createElement('span')
        ripples.style.left = x + 'px'
        ripples.style.top = y + 'px'
        start.appendChild(ripples)

        setTimeout(() => {
            ripples.remove()
        }, 1000)
    } )




