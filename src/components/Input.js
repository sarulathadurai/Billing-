import React from 'react';
import List from "./List";
import Total from "./Total";
import "/home/saru/calculator/src/Input.css"



export default class Input extends React.Component {

  constructor(){
    super();
    this.state ={
      item:"",
      amount: '',
      total : '0',
      list:[]
    }
}

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.item && this.state.amount){

      this.totalAmount();

      this.setState({
        list:[
          {
            Item:this.state.item,
            Amount:this.state.amount,
            total :this.state.total

          },
          ...this.state.list
  
        ],
        item: "",
      })
    }


 
}

handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
}

totalAmount = () => {

    let total = this.state.total;
    let amt = this.state.amount;
    let item = this.state.item;

   if(total){
     this.setState({

      total : parseInt(total) + parseInt(amt)
     })
   }

   else if (!item){
    
    this.setState({

      total : "0"
    })

   }

   else{

    this.setState({
      
      total: parseInt(amt)
    });
   }
}
  
    
    
  render(){
       
     
    return(
      <div className = "display">
        <form onSubmit = {this.handleSubmit}>

          <div className="form">

          <input type = "text" placeholder = "Enter items" name = "item" onChange= {this.handleChange}/> <br />

          <input type = "text" placeholder = "Enter Amount" name = "amount" onChange= {this.handleChange}/>

          <button className="btn-style">Add</button> 

          </div>
         
        </form>

        <List list = {this.state.list}/>
        <Total total = {this.state.total} />
      </div>
    );
  }
}