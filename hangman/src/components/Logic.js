import React, { Component } from 'react'
import WordList from './WordList'
import DisplayField from './DisplayField';
import FailedLetters from './FailedLetters';
export default class Logic extends Component {
    state = {
        WordList: WordList[Math.floor(Math.random() * WordList.length)],
        guessedLetters: []
    }
    render() {
        return (
            <div>
                <h1>Hangman's Inferno</h1>
                <DisplayField word={this.state.WordList.word} guessedLetters={this.state.guessedLetters} />
                <FailedLetters word={this.state.WordList.word} guessedLetters={this.state.guessedLetters} />
            </div>
        )
    }
}
