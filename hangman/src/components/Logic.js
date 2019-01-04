import React, { Component } from 'react'
import WordList from './WordList'
import DisplayField from './DisplayField';
export default class Logic extends Component {
    state = {
        WordList: WordList[Math.floor(Math.random() * WordList.length)]
    }
    render() {
        return (
            <div>
                <h1>Hangman's Inferno</h1>
                <DisplayField word ={this.state.WordList.word}/>              
            </div>
        )
    }
}
 