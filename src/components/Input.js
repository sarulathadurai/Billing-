 import React from 'react';
 import './Input.css';

 export default class Input extends React.Component{



    addToInput = val => {

        this.setState({input: this.state.input + val});
    
    }



    render(){
        return(
            <div className="input">
                {this.props.children}
            </div>
        );
    }
 }