// Globals

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
    hint1: `The fallen one, Son of the morning, The crooked serpent, Ib'lis, Frozen in center`
}, {
    word: "MALEBRANCHE",
    hint1: "Winged demons who torment politicians in the fifth Maleboge of the Eighth circle"
}]

const displayField = document.querySelector("#inputField")
const guessField = document.querySelector(".guessField")
const attemptField = document.querySelector("#livesField")
const soundWin = new Audio("./")