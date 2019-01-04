import React, { Component } from 'react'
import WordList from './WordList'

export default class DisplayField extends Component {
  state = {
    WordList: WordList[Math.floor(Math.random() * WordList.length)]
  }
  render() {
    const wordLetter = this.props.word.split('')

    const answer = wordLetter.map(letter => {
      let letterState = '_'
      if (this.props.guessedLetters.includes(letter)) {
        letterState = letter
      }
      return letterState + ' '
    })
    return (
      <div>
        <h2>{answer}</h2>
      </div>
    )
  }
}
