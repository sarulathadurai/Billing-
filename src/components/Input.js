import React from 'react';
import "/home/saru/hooks/src/Input.css";




export default class Input extends React.Component {


  constructor(){
    super();
    this.state ={
      item:"",
      amount: '',
    }
}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNinja(this.state);

    this.setState({
      item:"",
      amount:""
    })
}

handleChange = (event) => {
    event.preventDefault();
      this.setState({
      [event.target.name] : event.target.value
    }) 
  
 }

    
    
  render(){
       
     
    return(
      <div className = "display">
        <form onSubmit = {this.handleSubmit}>

          <div className="form">

          <input type = "text" placeholder = "Enter items" name = "item" value = {this.state.item}  onChange = {this.handleChange}/> <br />

          <input type = "text" placeholder = "Enter amount" name = "amount" value = {this.state.amount}  onChange = {this.handleChange}/> <br />

          
          <button className="btn-style">Add</button> 

          </div>
         
        </form>

      </div>
    );
  }
}