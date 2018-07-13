import React, { Component } from 'react';

class RenderingState extends Component{
    constructor(){
        super();
        this.state = {
            cats:5,
            dogs:2
        }
    }

    personType(cats, dogs){
        if(cats > dogs){
            return "cat";
        }else{
            return "dog";
        }
    }

    render(){
        return (<h1>You have {this.state.cats} cats and {this.state.dogs} dogs, therefore you are a {this.personType(this.state.cats, this.state.dogs)} person.</h1>)
    }
}

export default RenderingState;