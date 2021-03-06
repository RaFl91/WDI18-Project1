// Globals
class Game {
    constructor(word, lives) {
        console.log(word)
        this.word = word.word.toLowerCase().split("");
        this.lives = lives;
        this.guesses = word.word.replace(/[A-Z]/gi, "-").split("");
        this.failed = []
        this.hint = word.hint1
        this.renderWord = function () {
            displayField.value = this.guesses.join("").toUpperCase()
            attemptField.textContent = `Pleas Left: ${this.lives}`
        }
        this.checkCharacter = function (character) {
            if (this.lives && lives !== this.word.length) {
                const charWordFound = this.word.find(element => element === character)
                const charGuessFound = this.guesses.find(element => element === character)
        
                const guessedAlready = this.failed.includes(character)
                this.word.forEach((element, index) => {
                    if (character === element && !charGuessFound) {
                        this.guesses[index] = character
                        lives++
                    }
                })
                if (!charWordFound && !guessedAlready) {
                    this.lives--
                    if (!guessedAlready) {
                        failArr.push(character)
                    }
                }
                this.renderWord()
                return true
            }
            return false
        }
        this.resetGame = function () {
            if (lives === game.word.length || game.lives === 0) {
                if (lives === game.word.length) {
                    soundWin.play()
                } else if (game.lives === 0) {
                    soundFail.play()
                }
                displayField.value = game.word.join("").toUpperCase()
            }
            setTimeout(() => {
                guessField.innerHTML = ""
                game = new Game(words[randomize()], 5)
                lives = 0
                game.renderWord()
            }, 1500)
        }
    }
}

var wordList = [{
    word: "DIS",
    hint1: "The infernal city"
}, {
    word: "TARTARUS",
    hint1: "River of blood that boils souls"
}, {
    word: "VIRGIL",
    hint1: "Your underworld tour guide"
}, {
    word: "SIN",
    hint1: "An act of transgression against divine law"
}, {
    word: "HELL",
    hint1: "10 circles of eternal suffering"
}, {
    word: "LUCIFER",
    hint1: `The Fallen One, Son of the Morning, The Crooked Serpent, Ib'lis, Frozen in center`
}, {
    word: "MALEBRANCHE",
    hint1: "Winged demons who torment politicians in the fifth Maleboge of the Eighth circle"
}]

const words = wordList
const hint1 = document.getElementById('hint1')
const displayField = document.querySelector("#inputField")
const guessField = document.querySelector(".guessField")
const attemptField = document.querySelector(".livesField")
const soundWin = new Audio("/audio/audioSuccess.mp3")
const soundFail = new Audio("/audio/audioFail.mp3")
let lives = 0

//  === WORD RANDOMIZER ===
const randomize = (min = 0, max = words.length - 1) => Math.floor(Math.random() * (max - min + 1)) + min


//  === GAME START W/ NEW WORD ===
let game = new Game(words[randomize()], 5)
game.renderWord();

const failArr = game.failed


//  === DISPLAY WORD ON SCREEN ===


//  === MISSED GUESS DISPLAY ===
guessField.innerHTML = " "
failArr.forEach((element, index) => {
    const wrongLetter = document.createElement("li")
    wrongLetter.textContent = element.toUpperCase()
    wrongLetter.setAttribute("id", index)
    const lastInsert = document.getElementById(`${index -1}`)
    guessField.insertBefore(wrongLetter, lastInsert)
})

//  === CHARACTER CHECKER ===




//  === CHARACTER INPUT ===
document.addEventListener("keyup", e => {
    e.keyCode >= 65 && e.keyCode <= 90 ? game.checkCharacter(e.key) : console.log('wrong letters')
    // game.resetGame()
})
