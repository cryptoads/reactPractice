import React, { Component } from 'react';

class CallbackButton extends Component{
  

    render(){
        return (
            <div>
            <button onClick={this.props.callbackButton}>{this.props.text}</button>
            </div>
            )
    }
}

export default CallbackButton; 