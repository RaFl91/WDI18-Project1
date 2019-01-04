import React, { Component } from 'react'

export default class FailedLetters extends Component {

  getWrongLetters() {
    const fail = this.props.guessedLetters.filter(letter => {
     return !this.props.word.split('').includes(letter)
    })
    return fail
  }

  render() {
    return (
      <div>
      {this.getWrongLetters()}
      </div>
    )
  }
}
