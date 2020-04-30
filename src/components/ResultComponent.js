import React, {Component} from 'react';

class ResultComponent extends Component {
    
    state = {
          item: ''
    
    }
    changeHandler=(e)=> {
       
        this.setState ({

            item:e.target.value
        })
        
        //this.props.handleChange(this.state.item);   
    }
     
    handleSubmit = (e) => {
          e.preventDefault();
          this.props.handleChange(this.state.item);
          this.setState({
              item:""
          })
    }

    render() {
        //let {result} = this.props.result;
        return (
            <div>
                <div>
                    <input 
                    type = "text" 
                    placeholder = "Enter items" 
                    name = "item" 
                    value={this.state.item} 
                    required 
                    onChange={this.changeHandler}/>
                    <button onClick={(e)=>{this.handleSubmit(e)}}> Add item</button>
                </div>
                <div className = 'result'><p>{this.props.result}</p></div>
                
            </div>
    )
        ;
    }
}


export default ResultComponent;

