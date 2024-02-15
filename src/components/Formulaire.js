import React, { Component } from 'react'

class Formulaire extends Component {
    state ={
        message:'',
        length: this.props.length
    }

    createMessage = () =>{
        const { addMessage, pseudo, length } = this.props

        const message={
            pseudo,
            message: this.state.message
        }

        addMessage(message)
        //Rest
        this.setState({ message:'', length })
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event =>{
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
    }
     
    render (){
        return(
            <form
                className='form'
                 onSubmit={this.handleSubmit}>
                    <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                        required
                        maxLength={140}/>
                    <div className='info'>
                        {this.state.length}
                    </div>
                    <button>
                        Envoyer!
                    </button>
            </form>
        )
    }
}

export default Formulaire