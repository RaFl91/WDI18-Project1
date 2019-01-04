import React, { Component } from 'react'
import WordList from './WordList'
import DisplayField from './DisplayField';
import FailedLetters from './FailedLetters';
import Input from './Input';
export default class Logic extends Component {
    state = {
        WordList: WordList[Math.floor(Math.random() * WordList.length)],
        guessedLetters: []
    }

    updateGuessedLetters = (letter) => {
        if (this.state.guessedLetters.includes(letter)) {
            return null
        } else {
            this.setState({
                guessedLetters: { ...this.state.guessedLetters, letter }
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Hangman's Inferno</h1>
                <DisplayField word={this.state.WordList.word} guessedLetters={this.state.guessedLetters} />
                <Input updateGuessedLetters={this.updateGuessedLetters} />
                <FailedLetters word={this.state.WordList.word} guessedLetters={this.state.guessedLetters} />
            </div>
        )
    }
}
