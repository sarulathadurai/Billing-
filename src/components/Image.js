import React from 'react';

class Image extends React.Component{

    constructor(props){

        super(props)
    }

    render(){

        return(
            <img className="img-align" onClick = {e=>this.props.handleShow()} src="https://img.icons8.com/dusk/64/000000/calculator.png"/>
        
        );
        

    }

  



}



export default Image;