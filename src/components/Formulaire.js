import React, { Component } from 'react'

class Formulaire extends Component {
    hundleSubmit = event =>{
        console.log('Submit')
    }
    render (){
        return(
            <form
                className='form'
                 onSubmit={this.hundleSubmit}>
                    <textarea
                        required
                        maxLength={140}/>
                    <div className='info'>
                        140
                    </div>
                    <button>
                        Envoyer!
                    </button>
            </form>
        )
    }
}

export default Formulaire