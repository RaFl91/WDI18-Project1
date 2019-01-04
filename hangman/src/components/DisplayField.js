import React, { Component } from 'react'

export default class DisplayField extends Component {
  
  render() {
    const wordLetters = this.props.word.split('')

    const answer = wordLetters.map(letter => {
      let letterState = '_'
      if(this.props.guessedLetters.includes(letter)) {
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
