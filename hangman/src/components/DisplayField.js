import React, { Component } from 'react'
import WordList from './WordList'

export default class DisplayField extends Component {
  state = {
    WordList: WordList[Math.floor(Math.random() * WordList.length)]
}
  render() {
    
    return (
      <div>
        
      </div>
    )
  }
}
