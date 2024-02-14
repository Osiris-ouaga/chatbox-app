import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

class App extends Component {
  state ={
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message =>{
    // eslint-disable-next-line
    const messages = { ... this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({message})
  }
  render () {
    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <Message/>
          </div>
        </div>
        <Formulaire 
        length={150}
        pseudo={this.props.pseudo}
        addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
