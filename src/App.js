import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.pseudo // Utilisez this.props.pseudo au lieu de this.props.match.params.pseudo
  };

  addMessage = (message) => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    this.setState({ messages }); // Utilisez messages au lieu de message
  };

  render() {
    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <Message />
            <Message />
            <Message />
          </div>
        </div>
        <Formulaire 
          length={150}
          pseudo={this.props.pseudo} // Utilisez this.props.pseudo au lieu de this.state.pseudo
          addMessage={this.addMessage}
        />
      </div>
    );
  }
}

export default App;
