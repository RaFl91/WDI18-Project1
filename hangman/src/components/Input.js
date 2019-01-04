import React, { Component } from 'react'

export default class Input extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const letter = this.refs.textInput.value
        this.props.updateGuessedLetters(letter)
        this.refs.textInput.value = ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" ref='textInput' maxLength='1' />
                    <button>PLEAD YOUR CASE</button>
                </form>
            </div>
        )
    }
}
